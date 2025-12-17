import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.ARTICLE_STATS_TABLE;

export const handler = async (event) => {
  console.log('Article counter endpoint called:', event);

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
  };

  try {
    const body = JSON.parse(event.body || '{}');
    const { articleId, action } = body;

    if (!articleId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'articleId is required' })
      };
    }

    if (!action || !['like', 'dislike'].includes(action)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'action must be either "like" or "dislike"' })
      };
    }

    const timestamp = new Date().toISOString();

    // Determine which counter we're NOT incrementing
    const otherCounter = action === 'like' ? 'dislikeCount' : 'likeCount';

    // Use SET for timestamps and the other counter, ADD for the counter being incremented
    const updateExpression = `
      SET updatedAt = :timestamp,
          createdAt = if_not_exists(createdAt, :timestamp),
          ${otherCounter} = if_not_exists(${otherCounter}, :zero)
      ADD ${action}Count :increment
    `;

    const expressionAttributeValues = {
      ':increment': 1,
      ':zero': 0,
      ':timestamp': timestamp
    };

    const updateCommand = new UpdateCommand({
      TableName: TABLE_NAME,
      Key: { articleId },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW'
    });

    const updateResult = await docClient.send(updateCommand);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        articleId,
        action,
        stats: {
          likeCount: updateResult.Attributes?.likeCount || 0,
          dislikeCount: updateResult.Attributes?.dislikeCount || 0,
          createdAt: updateResult.Attributes?.createdAt,
          updatedAt: updateResult.Attributes?.updatedAt
        }
      })
    };

  } catch (error) {
    console.error('Error processing article counter:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};
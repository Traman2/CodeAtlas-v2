import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.ARTICLE_STATS_TABLE;

export const handler = async (event) => {
  console.log('Article stats getter endpoint called:', event);

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,OPTIONS'
  };

  try {
    const articleId = event.queryStringParameters?.articleId;

    if (!articleId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'articleId is required' })
      };
    }

    const getCommand = new GetCommand({
      TableName: TABLE_NAME,
      Key: { articleId }
    });

    const result = await docClient.send(getCommand);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        articleId,
        stats: {
          likeCount: result.Item?.likeCount || 0,
          dislikeCount: result.Item?.dislikeCount || 0,
          createdAt: result.Item?.createdAt,
          updatedAt: result.Item?.updatedAt
        }
      })
    };

  } catch (error) {
    console.error('Error fetching article stats:', error);

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
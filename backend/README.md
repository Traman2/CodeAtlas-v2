# CodeAtlas Backend - AWS SAM

Serverless backend using AWS SAM with DynamoDB for article feedback.

## Prerequisites

- AWS SAM CLI - [Install](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- Node.js 20+
- AWS CLI configured with credentials
- AWS account with appropriate permissions

## Project Structure

```
backend/
├── template.yaml          # SAM CloudFormation template
├── package.json          # NPM scripts
└── src/
    ├── test.js           # GET /test - Health check
    ├── articleCounter.js # POST /article/counter - Like/dislike handler
    └── package.json      # Lambda dependencies
```

## API Endpoints

### GET /test
Health check endpoint to verify API is working.

**Response:**
```json
{
  "message": "CodeAtlas API is working!",
  "timestamp": "2025-12-17T12:00:00.000Z",
  "environment": "AWS_Lambda_nodejs20.x"
}
```

### POST /article/counter
Increment like or dislike counter for an article. Automatically creates article if it doesn't exist.

**Request:**
```json
{
  "articleId": "/alldocs/welcome/overview",
  "action": "like"
}
```
- `articleId` (required): Article path/identifier
- `action` (required): Either `"like"` or `"dislike"`

**Response:**
```json
{
  "success": true,
  "articleId": "/alldocs/welcome/overview",
  "action": "like",
  "stats": {
    "likeCount": 1,
    "dislikeCount": 0,
    "createdAt": "2025-12-17T12:00:00.000Z",
    "updatedAt": "2025-12-17T12:00:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "error": "articleId is required"
}
```

## Development Workflow

### First Time Setup

```bash
# 1. Install Lambda dependencies
cd src && npm install && cd ..

# 2. Deploy to AWS
npm run deploy
```

Follow the prompts to configure your stack.

### Active Development with sam sync

Use `sam sync` to automatically deploy changes as you code:

```bash
npm run sync
```

This will:
- Watch for file changes
- Automatically build and deploy changes to AWS
- Skip CloudFormation for faster Lambda updates
- Show logs in real-time

Just edit your code and save - it deploys automatically!

### Testing

Your API Gateway URL will be shown after deployment. Test with:

```bash
# Get your API URL from deployment output, then:
curl https://YOUR-API-ID.execute-api.us-east-1.amazonaws.com/Prod/test

curl -X POST https://YOUR-API-ID.execute-api.us-east-1.amazonaws.com/Prod/article/counter \
  -H "Content-Type: application/json" \
  -d '{"articleId":"/alldocs/welcome/overview","action":"like"}'
```

### View Logs

```bash
npm run logs
```

## DynamoDB Schema

### Table: CodeAtlas-ArticleStats

| Attribute    | Type   | Description                      |
|--------------|--------|----------------------------------|
| articleId    | String | Partition key - Article path     |
| likeCount    | Number | Number of likes (auto-initialized) |
| dislikeCount | Number | Number of dislikes (auto-initialized) |
| createdAt    | String | ISO timestamp of first vote      |
| updatedAt    | String | ISO timestamp of last update     |

The table is created automatically on first deployment. Attributes are added dynamically as articles receive their first votes.

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run sync` | Auto-deploy on file changes (development) |
| `npm run deploy` | Full deployment (first time or infrastructure changes) |
| `npm run build` | Build SAM application |
| `npm run logs` | View CloudWatch logs |
| `npm run validate` | Validate SAM template |

## Development Tips

- **Fast iteration**: Use `npm run sync` to automatically deploy Lambda changes as you code
- **Infrastructure changes**: Use `npm run deploy` when modifying `template.yaml`
- **Debugging**: Check logs with `npm run logs` to see Lambda execution details
- **Testing**: Deploy to AWS and test with the actual API Gateway endpoint

## Notes

- DynamoDB table is created automatically on first deploy
- Article records are created on first vote (upsert behavior)
- Both counters initialize to 0 automatically
- CORS is configured to allow all origins (restrict in production)
- Lambda timeout is set to 30 seconds
- DynamoDB uses PAY_PER_REQUEST billing mode

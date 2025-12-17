export const handler = async (event) => {
  console.log('Test endpoint called:', event);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,OPTIONS'
    },
    body: JSON.stringify({
      message: 'CodeAtlas API is working!',
      timestamp: new Date().toISOString(),
      environment: process.env.AWS_EXECUTION_ENV || 'local'
    })
  };
};
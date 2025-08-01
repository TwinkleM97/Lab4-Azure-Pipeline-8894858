const { app } = require('@azure/functions');

app.http('HttpTrigger1', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log('HTTP trigger function processed a request.');

    const name = request.query.get('name') || (await request.json())?.name || 'World';
    const responseMessage = `Hello, ${name}! This Node.js Azure Function is working correctly.`;

    return {
      status: 200,
      jsonBody: { message: responseMessage }
    };
  }
});

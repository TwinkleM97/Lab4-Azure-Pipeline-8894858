const { app } = require('@azure/functions');

app.http('HttpTrigger1', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log('HTTP trigger function processed a request.');

    let name = request.query.get('name');
    
    if (!name && request.method === 'POST') {
      try {
        const bodyText = await request.text();
        const body = JSON.parse(bodyText || '{}');
        name = body.name;
      } catch (err) {
        context.log('Error parsing JSON body:', err.message);
      }
    }

    const responseMessage = getGreeting(name);

    return {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: responseMessage })
    };
  }
});

function getGreeting(name) {
  return name
    ? `Hello, ${name}! This Node.js Azure Function is working correctly.`
    : "Hello, World! This Node.js Azure Function is working correctly.";
}

module.exports = { getGreeting };

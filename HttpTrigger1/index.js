const { app } = require('@azure/functions');

app.http('HttpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('HTTP trigger function processed a request.');

        // Safely get name from query or JSON body
        const body = await request.text();
        const name = request.query.name || (body && JSON.parse(body).name);

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

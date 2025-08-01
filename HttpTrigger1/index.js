const { app } = require('@azure/functions');

app.http('HttpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('HTTP trigger function processed a request.');

        const name = request.query.get('name') || 
                    (await request.text() && JSON.parse(await request.text()).name);

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

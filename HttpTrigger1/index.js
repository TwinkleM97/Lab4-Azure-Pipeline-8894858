module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const name = req.query.name || (req.body && req.body.name) || 'World';
    const responseMessage = `Hello, ${name}! This Node.js Azure Function is working correctly.`;

    context.res = {
        status: 200,
        body: { message: responseMessage }
    };
};

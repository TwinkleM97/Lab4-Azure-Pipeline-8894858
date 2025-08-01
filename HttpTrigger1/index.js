module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const name = req.query.name || req.body?.name;
    const responseMessage = name
        ? `Hello, ${name}! This Node.js Azure Function is working correctly.`
        : "Hello, World! This Node.js Azure Function is working correctly.";

    context.res = {
        status: 200,
        body: { message: responseMessage }
    };
};

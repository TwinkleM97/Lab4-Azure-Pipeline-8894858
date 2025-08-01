const { expect } = require('chai');
const httpFunction = require('../index');

describe('HTTP Trigger Function', () => {
    it('should return 200 and expected body', async () => {
        const context = {
            log: () => {},
            res: {}
        };
        const req = {
            query: { name: 'Twinkle' },
            body: null
        };

        await httpFunction(context, req);

        expect(context.res.status).to.equal(200);
        expect(context.res.body.message).to.equal('Hello, Twinkle! This Node.js Azure Function is working correctly.');
    });
});

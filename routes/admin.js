const path = require('path');
const {Controllers, Middleware} = require(path.join(__dirname, '../../../Core/'));

module.exports = [
    {
        method: 'GET',
        path: '/admin/dashboard',
        config: {
            handler: async function (request, h) {
                const connect = await Middleware.auth(request, h);
                if (connect === 'passed') {
                    return Controllers.admin.dashboard(request, h);
                }
                return connect;
            },
            description: 'Goto Main HomePage',
        },
    },
    {
        method: 'GET',
        path: '/admin/',
        handler: Controllers.admin.welcome,
        config: {
            description: 'Welcome Page',
        },
    },
];

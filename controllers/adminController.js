const { Models } = require('../../../Core/');


module.exports = {
    name: 'admin',

    dashboard: async (request, h) => {
        const modules = await Models.Drifty_Modules.findAll();
        return h.view('admin/pages/dashboard', {modules: modules}, {layout: 'core/layout/app'});
    },

    welcome: async (request, h) => {
        return h.view('admin/pages/welcome', null, {layout: 'core/layout/app'});
    },
};

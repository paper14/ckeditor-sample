var router = require('koa-router')();

module.exports = function(ctrl) {
    router
        .get('/', ctrl.ckeditor.index)
        .get('/browse', ctrl.ckeditor.browse);

    return router;
};

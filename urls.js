var router = require('koa-router')();

module.exports = function(ctrl) {
    router
        .get('/', ctrl.ckeditor.index)
        .get('/browse', ctrl.ckeditor.browse)
        .get('/upload', ctrl.ckeditor.upload);

    return router;
};

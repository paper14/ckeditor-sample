var router = require('koa-router')();

module.exports = function(ctrl) {
  router
    .get('/', ctrl.ckeditor.index)
    .get('/browse', ctrl.ckeditor.browse)
    .get('/get-images', ctrl.ckeditor.get)
    .post('/upload', ctrl.ckeditor.upload);

  return router;
};
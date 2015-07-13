var koaBody = require('koa-body');

module.exports = {

    index: function*(next) {
        var res = yield this.models.ckeditor.find({});
        console.log(res);

        yield this.render("index.html");
    },

    browse: function*(next) {
        yield this.render("browse.html");
    }

};

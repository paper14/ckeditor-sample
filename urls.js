var router = require('koa-router')();

module.exports = function() {
	router
		.get('/', function * (next) {
			// var res = yield Image.find({});
			// console.log(res);
			yield this.render("index.html");
		})
		.get('/browse', function * (next) {
			yield this.render("browse.html");
		})
		.get('/upload', function * (next) {
			yield this.render("upload.html");
		});

	return router;
};
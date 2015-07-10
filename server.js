var koa = require('koa.io');
var serve = require('koa-static');
var router = require('koa-router')();
var render = require('koa-swig');
var path = require('path');
var mongoose = require('mongoose');
var url = require('./urls');

var app = koa();

app.context.render = render({
	root: path.join(__dirname, 'templates'),
	autoescape: true,
	cache: 'memory',
	ext: 'html'
});

mongoose.connect('mongodb://localhost:27017/ck');
mongoose.connection
  .once("open", function() {
    console.log('connected to MongoDB');
  });

var movieSchema = new mongoose.Schema({
	email: String
});

var Image = mongoose.model('Image', movieSchema);

// router
// 	.get('/', function * (next) {
// 		var res = yield Image.find({});
// 		console.log(res);
// 		yield this.render("index.html");
// 	})
// 	.get('/browse', function * (next) {
// 		yield this.render("browse.html");
// 	})
// 	.get('/upload', function * (next) {
// 		yield this.render("upload.html");
// 	});
// 	console.log("URL: ", url);
// 	console.log("ROUTER: ", router);

var router = url();
app
	.use(router.routes())
	.use(router.allowedMethods());

app
	.use(serve(__dirname + '/assets'))
	.use(serve(__dirname + '/bower_components'));

app.listen(3002);
console.log('Listening to Port: 3002');
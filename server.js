var koa = require('koa.io');
var serve = require('koa-static');
var router = require('koa-router')();
var render = require('koa-swig');
var path = require('path');
var mongoose = require('mongoose');
var koaBody = require('koa-body');
var multer = require('koa-multer');
var bodyParser = require('koa-bodyparser');
var url = require('./urls');
var thisApp = require('./applications');

var app = koa();

app.use(bodyParser());

app.use(multer({
  dest: __dirname + "/uploads/images",
  rename: function(fieldname, filename) {
    return filename;
  }
}));

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


app.use(function * (next) {

  this.models = thisApp.models;
  this.controllers = thisApp.controllers;

  yield * next;
});


var router = url(thisApp.controllers);
app
  .use(router.routes())
  .use(router.allowedMethods());

app
  .use(serve(__dirname + '/assets'))
  .use(serve(__dirname + '/bower_components'))
  .use(serve(__dirname + '/uploads'));

app.listen(3002);
console.log('Listening to Port: 3002');
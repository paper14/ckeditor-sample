module.exports = {

  index: function * (next) {
    var res = yield this.models.ckeditor.find({});
    console.log(res);

    yield this.render("index.html");
  },

  browse: function * (next) {
    yield this.render("browse.html");
  },

  upload: function * (next) {

    var thisData = this.req.files;

    var data = thisData.file_0;

    console.log(data);

    var savData = new Object();

    savData.originalname = data.originalname;
    savData.name = data.name;
    savData.path = data.path;

    console.log(savData);

    var res = yield this.models.ckeditor.create(savData);

    console.log(res);

    this.body = this.req.files;
  }

};
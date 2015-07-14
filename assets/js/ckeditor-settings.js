require(['jquery', 'bootstrap', 'ckeditor'], function($) {

  CKEDITOR.replace('imgUpload', {
    filebrowserBrowseUrl: '/browse',
    filebrowserUploadUrl: '/js/upload.js',
    filebrowserImageWindowWidth: '600',
    filebrowserImageWindowHeight: '500'
  });

});
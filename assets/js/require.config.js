var require = {
  paths: {
    'jquery': '/jquery/dist/jquery.min',
    'bootstrap': '/bootstrap/dist/js/bootstrap.min',
    'ckeditor': '/plugin/ckeditor/ckeditor',
    'nicescroll': '/plugin/jquery.nicescroll.min'
  },

  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
    'ckeditor': {
      deps: ['jquery']
    },
    'nicescroll': {
      deps: ['jquery']
    }
  }
};
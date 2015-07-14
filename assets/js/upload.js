require(['jquery', 'bootstrap', 'nicescroll'], function($) {
  $('.upload-btn').on('click', function() {
    $('#filePath').trigger('click');
  });

  $('#filePath').on('change', function(e) {
    var data = new FormData();
    $.each($(this)[0].files, function(i, file) {
      data.append('file_' + i, file);
    });

    fileUpload(data);

  });

  function fileUpload(data) {

    $.ajax({
      url: '/upload',
      method: 'POST',
      data: data,
      contentType: false,
      processData: false
    })
      .done(function(data) {
        console.log("Data Loaded: ", data);
        addPath(data);
      });

  }

  /* Show All Uploaded Images */
  $.ajax({
    url: '/get-images',
    method: 'GET'
  })
    .done(function(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var imgElement = '<li><img src="' + data[i].path + '"><div class="img-info"><span class="img-name">' + data[i].name + '</span><span class="img-button" img-path="' + data[i].path + '">Use</span></div></li>';
        $('.displayImages ul').append(imgElement);
      }
    });

  $(document).on('click', '.displayImages .img-button', function() {
    addPath($(this).attr('img-path'));
  });

  function addPath(path) {
    console.log(path)

    if (path) {
      // Helper function to get parameters from the query string.
      function getUrlParam(paramName) {
        var reParam = new RegExp('(?:[\?&]|&amp;)' + paramName + '=([^&]+)', 'i');
        var match = window.location.search.match(reParam);

        return (match && match.length > 1) ? match[1] : '';
      }

      var funcNum = getUrlParam('CKEditorFuncNum');

      try {
        window.opener.CKEDITOR.tools.callFunction(funcNum, path);

        $('.errMessage').html('');

        window.close();

      } catch (err) {
        if (err) {
          $('.errMessage').html('<div class="alert alert-danger" role="alert">Please Open Image Upload</div>');
        }
      }
    }
  }

  $(document).ready(function() {
    $("html").niceScroll();
  });
});
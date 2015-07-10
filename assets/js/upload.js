$('#filePath').on('change', function(e) {

	var filePath = URL.createObjectURL(e.target.files[0]);

	addPath(filePath);

	if(filePath == null ){	
		filePath = '';
	}

	var imgElement = '<img src="'+ filePath +'" />';
	$('.imgPreview').html(imgElement);

	if($('.imgPreview').html() != ''){
		$('.displayImages ul li').removeClass('select');
	}

});

$(document).on('click','.displayImages ul li img', function(e) {

	$('.imgPreview img').remove();

	addPath(e.target.src);

	if($(this).parent().siblings().hasClass('select')){
		$(this).parent().siblings().removeClass('select');
	}
	$(this).parent().addClass('select');

});

function addPath(path){
	console.log(path)

	if(path){
		// Helper function to get parameters from the query string.
		function getUrlParam(paramName)
		{
		  var reParam = new RegExp('(?:[\?&]|&amp;)' + paramName + '=([^&]+)', 'i') ;
		  var match = window.location.search.match(reParam) ;
		 
		  return (match && match.length > 1) ? match[1] : '' ;
		}

		var funcNum = getUrlParam('CKEditorFuncNum');

		try {
			window.opener.CKEDITOR.tools.callFunction(funcNum, path);
		
			$('.errMessage').html('');
	
		} catch(err) {
			if(err) {
				$('.errMessage').html('<div class="alert alert-danger" role="alert">Please Open Image Upload</div>');
			}
		}
	}
}


/* Get Temporary Image from Instagram */
$(document).ready(function() {
	var url = 'https://api.instagram.com/v1/users/1907003550/media/recent/?access_token=1907003550.cf0499d.e627e909923f4041be763da0be014336';

	$.ajax({
		method: 'GET',
		url: url,
		crossDomain: true,
		dataType: 'jsonp',
		success: function(data) {
			var reqData = data.data;

			for(var i=0; i < reqData.length; i++){
				var imgElement = '<li><img src="'+ reqData[i].images.standard_resolution.url +'"></li>'
				$('.displayImages ul').append(imgElement);
			}
		}
	});
});
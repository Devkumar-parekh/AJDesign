$(document).ready(function() {
  // add all to same gallery
  $(".gallery a").attr("data-fancybox","mygallery");
  // assign captions and title from alt-attributes of images:
  $(".gallery a").each(function(){
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  // start fancybox:
	$(".gallery a").fancybox();


    $(document).on("click", "a.top-btn", function(e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: 0
			}, 100);
	});
	var offset = $("#masthead").offset();
	checkOffset();
	$(window).scroll(function() {
		checkOffset();
	});

	function checkOffset() {
		if ($(document).scrollTop() > offset.top) {
			$('a.top-btn').show();
		} else {
		$('a.top-btn').hide();
		}
	}


	$(window).scroll(function() {
		var sticky = $('body'),
		scroll = $(window).scrollTop();
		if (scroll >= 20) sticky.addClass('sticky_header');
		else sticky.removeClass('sticky_header');
	});

});

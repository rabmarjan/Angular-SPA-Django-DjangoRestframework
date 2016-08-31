$(document).ready(function(){

	// hide #back-top first
	$(".back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('.back-top').fadeIn();
			} else {
				$('.back-top').fadeOut();
			}
		});

	});
	
	

});
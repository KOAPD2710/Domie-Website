
$(document).ready(function(){

	$(".carouselitem .owl-one .owl-item .wrap").click(function(changebg){
		var $bgchange = $(this).attr("color-bg");
		$(".bodygradient").css("background" , $bgchange);
		/* Change Bg when click Carousel */


		$(".carouselitem .charactor .word").removeClass('active');
		if ($(this).hasClass("bg1")) {
			$(".carouselitem .charactor .word.bg1").addClass('active');
		};
		if ($(this).hasClass("bg2")) {
			$(".carouselitem .charactor .word.bg2").addClass('active');
		};
		if ($(this).hasClass("bg3")) {
			$(".carouselitem .charactor .word.bg3").addClass('active');
		};
		if ($(this).hasClass("bg4")) {
			$(".carouselitem .charactor .word.bg4").addClass('active');
		};
		if ($(this).hasClass("bg5")) {
			$(".carouselitem .charactor .word.bg5").addClass('active');
		};
		if ($(this).hasClass("bg6")) {
			$(".carouselitem .charactor .word.bg6").addClass('active');
		};
		if ($(this).hasClass("bg7")) {
			$(".carouselitem .charactor .word.bg7").addClass('active');
		};
	});

});

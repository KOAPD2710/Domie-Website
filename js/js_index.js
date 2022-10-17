
$(document).ready(function(){

	$(".carouselitem .owl-one .owl-item .wrap").click(function(changebg){
		var $bgchange = $(this).attr("color-bg");
		$(".bodygradient").css("background" , $bgchange);
		/* Change Bg when click Carousel */
	});
});

$(document).ready(function(){
	$(".carouselitem .owl-one .owl-item .wrap").click(function(val){
		var bgchange = $(this).attr("name");
		$(".bodygradient").css('background' ,log(bgchange));
	});
});
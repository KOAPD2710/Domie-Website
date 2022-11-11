$(document).ready(function(){

	$("#navi .navicon .cart").click(function(val){
		if ($("#modalcart").hasClass("checked")) {
			$("#modalcart").removeClass("checked");
			document.body.style.overflow = '';
		} else{
			$("#modalcart").addClass("checked");
			document.body.style.overflow = 'hidden';
		}
	});

	$("#navimobile .cart").click(function(val){
		if ($("#modalcart").hasClass("checked")) {
			$("#modalcart").removeClass("checked");
			document.body.style.overflow = '';
		} else{
			$("#modalcart").addClass("checked");
			document.body.style.overflow = 'hidden';
		}
	});

	$("#navimobile .menu #menucheckbox").click(function(val){
		if (this.checked == true ) {
			document.body.style.overflow = 'hidden';
			$("#menucontainer").addClass("checked");
		} else {
			document.body.style.overflow = '';
			$("#menucontainer").removeClass("checked");
		}
	});

	$("#modalcart .closebtn button").click(function(val){
		if ($("#modalcart").hasClass("checked")) {
			$("#modalcart").removeClass("checked");
			document.body.style.overflow = '';
		} else{
			$("#modalcart").addClass("checked");
			document.body.style.overflow = 'hidden';
		}
	});

	$("#navi .navlink ul li a").hover(function(){
		$("#navi .navlink ul li.active a").css('color', 'var(--g1)');
		$('#navi .navlink ul li.active a::after').css('width', '0%')
	}, function(){
		$("#navi .navlink ul li.active a").css('color', '');
	})
});


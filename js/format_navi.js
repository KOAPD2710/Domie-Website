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
		} else {
			document.body.style.overflow = '';
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
	})
});


$(document).ready(function(){

	$("#navimobile .menu #menucheckbox").click(function(val){
		if (this.checked == true ) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});
});
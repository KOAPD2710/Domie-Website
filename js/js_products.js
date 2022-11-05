$(document).ready(function(val){
	$('.quantity .input-qty').each(function() {
		var $this = $(this);
		qty = $this.parent().find('.is-form');
		min = Number($this.attr('min'));
		max = Number($this.attr('max'));
		if (min == 0) {
			var d = 0
		} else d = min
		$(qty).on('click', function() {
			if ($(this).hasClass('minus')) {
				if (d > min) d += -1
			} else if ($(this).hasClass('plus')) {
				var x = Number($this.val()) + 1
				if (x <= max) d += 1
			}
			$this.attr('value', d).val(d);
		})
	});
});



$(document).ready(function(val){
	/* Set rates + misc */
	var shippingRate = 4.75; 
	var fadeTime = 300;


	/* Assign actions */
	$('.quantity .input-qty').change( function() {
		updateQuantity(this);
	});

	$('.iteminfo button').click( function() {
		removeItem(this);
	});


	/* Recalculate cart */
	function recalculateCart()
	{
	var subtotal = 0;

	/* Sum up row totals */
	$('.checkcart .wrap').each(function () {
		subtotal += parseFloat($(this).children('.hide').text());
	});

	/* Calculate totals */
	var shipping = (subtotal > 0 ? shippingRate : 0);
	var total = subtotal + shipping;

	/* Update totals display */
	$('.totals-value').fadeOut(fadeTime, function() {
		$('#cart-subtotal').html(subtotal.toFixed(2));
		$('#cart-shipping').html(shipping.toFixed(2));
		$('#cart-total').html(total.toFixed(2));
		if(total == 0){
		  $('.btn1').css("opacity", ".1");
		}else{
		  $('.btn1').css("opacity", "1");
		}
		$('.totals-value').fadeIn(fadeTime);
	});
	}


	/* Update quantity */
	function updateQuantity(quantityInput)
	{
	/* Calculate line price */
	var productRow = $(quantityInput).parent().parent();
	var price = parseFloat(productRow.children('.hide').text());
	var quantity = $(quantityInput).val();
	var linePrice = price * quantity;

	/* Update line price display and recalc cart totals */
	productRow.children('.sum').each(function () {
		$(this).fadeOut(fadeTime, function() {
			$(this).text(linePrice.toFixed(2));
			recalculateCart();
			$(this).fadeIn(fadeTime);
		});
	});  
	}


	/* Remove item from cart */
	function removeItem(removeButton)
	{
	/* Remove row from DOM and recalc cart total */
	var productRow = $(removeButton).parent().parent().parent();
	productRow.slideUp(fadeTime, function() {
		productRow.remove();
		recalculateCart();
	});
	}
});

$('body').append('<div class="toggle"><button class="btn-bad">bad</button><button class="btn-good">good</button></div>');


var $body = $('body');
var $bad = $('.bad');
var $good = $('.good');

$( ".toggle" ).on( "click", ".btn-bad", function() {
	$bad.show();
	$good.hide();
	$body.addClass('is-bad').removeClass('is-good');
});

$( ".toggle" ).on( "click", ".btn-good", function() {
	$good.show();
	$bad.hide();
	$body.addClass('is-good').removeClass('is-bad');
});

$('.btn-bad').click();
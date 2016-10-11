
$('body').append('<div class="toggle"><button class="btn-bad">bad</button><button class="btn-good">good</button></div>');


var $bad = $('.bad');
var $good = $('.good');

$bad.show();
$good.hide();

$( ".toggle" ).on( "click", ".btn-bad", function() {
	$bad.show();
	$good.hide();
});

$( ".toggle" ).on( "click", ".btn-good", function() {
	$good.show();
	$bad.hide();
});
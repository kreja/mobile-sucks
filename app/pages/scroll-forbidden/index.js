'use strict';
require('./index.less');
require('../../mods/init.js');


// 禁止所有滚动，但是 dialog 里也不能滚动了
// document.querySelector('body').addEventListener('touchmove', function (e) {
// 	e.preventDefault();
// },false);


// $('.btn-show-dialog').click(function(){
// 	$('.dialog').show();
// 	console.log($('body').scrollTop());
// 	$('body').css({
// 		position: 'fixed',
// 		top: -$('body').scrollTop()
// 	});
// });

// $('.btn-hide-dialog').click(function(){
// 	$('.dialog').hide();
// 	$('body').css({
// 		position: 'relative',
// 		top: 'auto'
// 	});
// });

// $('.btn-hide-dialog').click();






$('.bad .btn-show-dialog').click(function() {
	$('.bad .dialog').show();
});
$('.bad .btn-hide-dialog').click(function() {
	$('.bad .dialog').hide();
});
$('.bad .btn-hide-dialog').click();



// good way
// prevent body from scrolling while displaying the dialog
// 但是会出现闪烁
// 
// 记录 scrollTop
var bodyScrollTop = 0;
$('html').on( "click", ".good .btn-show-dialog", function() {
	bodyScrollTop = $('body').scrollTop();

	$('body').css({
		position: 'fixed',
		top: -bodyScrollTop
	}); 

	setTimeout(function(){
		$('.good .dialog').show();
	}, 200);
});
$('html').on( "click", ".good .btn-hide-dialog", function() {
	$('body').css({
		position: 'relative',
		top: 'auto'
	}).scrollTop(bodyScrollTop);

	setTimeout(function(){
		$('.good .dialog').hide();
	}, 200);
});
$('.good .btn-hide-dialog').click();

$(document).ready(function (){
    console.log("Script included!");

$('ul li').on('click', function(){
	$(this).toggleClass('linethrough');
});
	
	

$('ol li').click(function(){
	$(this).toggleClass("linethrough_a");
});


$('button').click(function(){
	
	$(".picture").toggle();
	$(".profile").toggle();
	$(".ending").toggle();
});


});



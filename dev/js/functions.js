init();
$('.start').click(function() {
	start_click();
});

$('.next').click(function() {
	next_click();
});

$('.back').click(function() {
	back_click();
});

function init(){
	$('#page1').fadeIn(500);
}

function start_click(){
	alert("start clicked");
}

function next_click(){
	alert("next clicked");
	
}

function back_click(){
	alert("back clicked");
	
}


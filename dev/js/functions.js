var cur_div = "page1";
var div_stack[];

$('#start').click(function() {
	start_click();
});

$('#next').click(function() {
	next_click();
});

$('#back').click(function() {
	back_click();
});

function start_click(){
	alert("start clicked");
}

function next_click(){
	alert("next clicked");
}

function back_click(){
	alert("back clicked");
}

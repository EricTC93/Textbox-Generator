$("#playButton").on("click",function(event) {
	event.preventDefault();

	$("#playButton").prop('disabled', true);
	$("#stopButton").prop('disabled', false);

	let speed = $("#textSpeed").val().trim();
	speed = Number(speed);

	if (speed <= 0) {
		speed = 40;
		$("#textSpeed").val(40);
	}

	let txt = $("#textinput").val().trim();

	let txtArr = txt.split("");

	displayText(txtArr,"",speed);

});

$("#stopButton").on("click",function(event) {
	event.preventDefault();

	$("#stopButton").prop('disabled', true);

});

function displayText(arr,str,spd) {

	if ($("#stopButton").prop('disabled')) {
		$("#playButton").prop('disabled', false);
		$("#textdisplay").val("");
		return;
	}

	if (arr.join("") === str) {
		$("#playButton").prop('disabled', false);
		$("#stopButton").prop('disabled', true);
		return;
	}

	let i = str.length;
	let char = arr[i];
	str = str + char;
	$("#textdisplay").val(str);
	setTimeout(function() {displayText(arr,str,spd);},spd);
}
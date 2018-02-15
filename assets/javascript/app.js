// $("#textinput").val("")

$("#playButton").on("click",function(event) {
	event.preventDefault();

	$("#playButton").prop('disabled', true);

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

function displayText(arr,str,spd) {

	if (arr.join("") === str) {
		$("#playButton").prop('disabled', false);
		return;
	}

	let i = str.length;
	let char = arr[i];
	str = str + char;
	$("#textdisplay").val(str);
	setTimeout(function() {displayText(arr,str,spd);},spd);
}
let endBlock = false;

document.onkeyup = function(event) {

	userLetter = event.key;

	if (userLetter !== "Enter") {
		return;
	}

	if ($("#playButton").prop('disabled')) {
		endBlock = true;
	}

	else {
		startText();
	} 
}

$("#playButton").on("click",function(event) {
	event.preventDefault();
	startText();
});

function startText() {

	let txt = $("#textInput").val().trim();

	if(txt === "") {
		return;
	}

	$("#playButton").prop('disabled', true);
	$("#stopButton").prop('disabled', false);

	let speed = $("#textSpeed").val().trim();
	speed = Number(speed);

	if (speed <= 0) {
		speed = 40;
		$("#textSpeed").val(40);
	}

	let txtArr = txt.split("#/#");

	for (let i = 0; i<txtArr.length; i++) {
		if(txtArr[i] !== "Break") {
			txtArr[i] = txtArr[i].split("");
		}
	}

	displayText(txtArr,"",speed);
}

$("#stopButton").on("click",function(event) {
	event.preventDefault();

	$("#stopButton").prop('disabled', true);

});


function displayText(arr,str,spd) {

	let blockArr = arr[0];

	if ($("#stopButton").prop('disabled')) {
		$("#playButton").prop('disabled', false);
		$("#textDisplay").val("");
		return;
	}

	if (endBlock) {
		$("#textDisplay").val(blockArr.join(""));
		str = blockArr.join("");
		endBlock = false;
	}

	if (blockArr.join("") === str) {

		arr.shift();

		if(arr.length > 1 && arr[0] === "Break") {
			arr.shift();
			setTimeout(function() {displayText(arr,"",spd);},3000);
		}

		else {
			$("#playButton").prop('disabled', false);
			$("#stopButton").prop('disabled', true);
		}

		return;
	}

	let i = str.length;

	if (!blockArr[i]) {
		console.log("Error: Out of Scope");
		return;
	}

	let char = blockArr[i];
	str = str + char;
	$("#textDisplay").val(str);
	setTimeout(function() {displayText(arr,str,spd);},spd);
}
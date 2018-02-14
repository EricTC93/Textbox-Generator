// $("#textinput").val("")

$("#playButton").on("click",function(event) {
	event.preventDefault();

	let txt = $("#textinput").val().trim();

	let txtArr = txt.split("");

	displayText(txtArr,"");
	
	// $("#textdisplay").val(txt);

});

function displayText(arr,str) {

	if (arr.join("") === str) {
		return;
	}

	let i = str.length;
	let char = arr[i];
	str = str + char;
	$("#textdisplay").val(str);
	setTimeout(function() {displayText(arr,str);},40);
}
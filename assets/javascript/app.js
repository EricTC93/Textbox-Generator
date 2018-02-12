$("#playButton").on("click",function(event) {
	event.preventDefault();

	let txt = $("#textinput").val().trim();
	
	$("#textdisplay").val(txt);
});
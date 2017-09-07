$(document).ready(function(){
	// Initialize timeout
	var timeout;

	resetTimer = function(){
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			$("#pop-up").fadeIn("slow");
		}, 300000);
	}

	document.onmousemove = resetTimer;
	document.onclick = resetTimer;
	document.onscroll = resetTimer;

});
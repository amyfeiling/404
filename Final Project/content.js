//console.log("Chrome extension go?");

chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message, sender, sendResponse) {

	//console.log(message);

	if(message.txt === "link") {

		var anchors = document.getElementsByTagName('a');
		for (var i = 0; i<anchors.length; i++){

        	anchors[i].style.color = message.color;
    	}
	}
	else if(message.txt === "fgcolor") {

		var fgColor = document.getElementsByTagName('*');
		for (var i=0; i<fgColor.length; i++) {
			fgColor[i].style.color = message.color;
		}
		
	}
	else if(message.txt === "bgcolor") {

		var bgColor = document.getElementsByTagName('*');
		for (var i=0; i<bgColor.length; i++) {
			bgColor[i].style.backgroundColor = message.color;
		}
		
	}
}

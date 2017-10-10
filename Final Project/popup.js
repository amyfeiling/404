
function click(e, color) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + color + "'"});
      //{code:"document.body.style.backgroundColor='red'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
	var color = document.getElementById('bgcolorSelector').value;
	document.getElementById('result').innerHTML = color;
      //document.querySelector('#bgcolorSelector').addEventListener('change', click);      
});

/*function main() {
    var source = document.getElementById('bgcolorSelector').value;
    document.getElementById("result").innerHTML = source;
}*/


/*document.addEventListener('DOMContentLoaded', function () {

  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});*/
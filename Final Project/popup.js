
/*function click(e, color) {

  //chrome.tabs.executeScript(null,
      //{code:"document.body.style.backgroundColor='" + color + "'"});
     // {code:"document.body.style.backgroundColor='red'"});
  //document.querySelector("#result").innerHTML = "Hello";
  //document.getElementById('result').innerHTML = 'red';
  //window.close();
  alert("hello");
  this.style.backgroundColor = "red";
}

document.addEventListener('DOMContentLoaded', function () {
	var color = document.getElementById('#bgcolorSelector').value;
	//document.getElementById('result').innerHTML = color;
   //document.querySelector("#result").innerHTML = color;
  document.querySelector('#bgcolorSelector option:checked').addEventListener('change', click);
  //document.querySelector('#bgcolorSelector').addEventListener("change", click);      
});*/


/*function main() {
    var source = document.getElementById('bgcolorSelector').value;
    document.getElementById('result').innerHTML = source;
}*/


/*document.addEventListener('DOMContentLoaded', function () {

  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});*/


// ******** ORIGINAL CODE ********
/*function click(color, e) {
  //chrome.tabs.executeScript(null,
      //{code:"document.body.style.backgroundColor='" + color + "'"});

  document.getElementById('result').innerHTML = color;
  document.body.style.background=color;

  //window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  //var color = document.querySelector('#bgcolorSelector option:checked').value;
  var color = document.querySelector('#bgcolorSelector').value;
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click.bind(null, color), false);
  }

  document.querySelector('#bgcolorSelector').addEventListener('change', click.bind(null, color), false);
});*/

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="bgcolorSelector"]').onchange=backgroundChangeEventHandler;
},false);

function backgroundChangeEventHandler(event) {
      document.body.style.background=event.target.value;

      chrome.tabs.executeScript(null,
      {code:"document.body.style.background='" + event.target.value + "'"});
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="fgcolorSelector"]').onchange=foregroundChangeEventHandler;
},false);

function foregroundChangeEventHandler(event) {
      document.body.style.color=event.target.value;

      chrome.tabs.executeScript(null,
      {code:"document.body.style.color='" + event.target.value + "'"});
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="linkSelector"]').onchange=linkChangeEventHandler;
},false);

function linkChangeEventHandler(event) {
    var container = document.getElementById('randomText');
    var anchors = container.getElementsByTagName('a');
    for (var i = 0; i<anchors.length; i++){
        anchors[i].style.color = event.target.value;
    }
}


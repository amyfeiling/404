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
    //var container = document.getElementById('randomText');
    //var anchors = container.getElementsByTagName('a');
    var anchors = document.getElementsByTagName('a');
    for (var i = 0; i<anchors.length; i++){
        anchors[i].style.color = event.target.value;

        chrome.tabs.executeScript(null,
        {code:"anchors[i].style.color='" + event.target.value + "'"});
    }

    chrome.tabs.executeScript(null,
    {code:"document.getElementsByTagName('a).style.color='" + event.target.value + "'"});
}

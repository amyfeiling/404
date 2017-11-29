document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="bgcolorSelector"]').onchange=backgroundChangeEventHandler;
},false);

function backgroundChangeEventHandler(event) {
      //document.body.style.backgroundColor=event.target.value;


        let params = {

          active: true,
          currentWindow: true
        }

        chrome.tabs.query(params, gotTabs);

        function gotTabs(tabs) { 

          let msg = {
            txt: 'bgcolor',
            color: event.target.value
          }

          chrome.tabs.sendMessage(tabs[0].id, msg);
        }

}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="fgcolorSelector"]').onchange=foregroundChangeEventHandler;
},false);

function foregroundChangeEventHandler(event) {
      //document.body.style.color=event.target.value;


      let params = {

        active: true,
        currentWindow: true
      }

      chrome.tabs.query(params, gotTabs);

      function gotTabs(tabs) { 

        let msg = {
          txt: 'fgcolor',
          color: event.target.value
        }

        chrome.tabs.sendMessage(tabs[0].id, msg);
      }

}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="linkSelector"]').onchange=linkChangeEventHandler;
},false);

function linkChangeEventHandler(event) {
    
    // var anchors = document.getElementsByTagName('a');
    

    // for (var i = 0; i<anchors.length; i++){


    //     anchors[i].style.color = event.target.value;

    // }

    //console.log("text changed");

    let params = {

      active: true,
      currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) { 

      let linkColor = event.target.value;

      let msg = {
        txt: 'link',
        color: event.target.value
      }

      chrome.tabs.sendMessage(tabs[0].id, msg);
    }

    
}


    
    




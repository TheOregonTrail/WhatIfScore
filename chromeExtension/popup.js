document.addEventListener("DOMContentLoaded", function () {
  var submit = document.body.getElementsByTagName("button")[0];

submit.addEventListener("click", function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "some_script.js"
    }), function(){
        chrome.tabs.sendMessage(tabs[0].id, {
          updateTextTo: updateTextTo
        })
      }
  })
});
});


// https://stackoverflow.com/questions/40645538/communicate-data-from-popup-to-content-script-injected-by-popup-with-executescri/40666096

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'oakschristian.myschoolapp.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
//background script is always running unless extension
//is disabled

//Wait for some one connect to it
let contentPort;
chrome.runtime.onConnect.addListener(function(portFrom) {
   if(portFrom.name === 'background-content') {
      //This is how you add listener to a port.
      portFrom.onMessage.addListener(function(message) {
         //Do something to this message(offsetheight and width)
      });
   }
});

//Send a message to a tab which has your content script injected.
//You should able to use postMessage here as well.
chrome.tabs.sendMessage(YOUR_TARGET_TAB_ID, {action: 'GET_DIMENSION'});

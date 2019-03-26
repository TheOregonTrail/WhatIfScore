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

/*
chrome.pageAction.onClicked.addListener(function(tab) {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  console.log("sending request...")
  chrome.tabs.sendMessage(tabs[0].id, {message: "start"}, function(response) {
    if(response.farewell == "recieved !") {
      console.log("message recieved !");
    }
  });
});
});
*/

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  // Highlight extension on proper url (oakschristian.org)
  
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'oakschristian.myschoolapp.com'},
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

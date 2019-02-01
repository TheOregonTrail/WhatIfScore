  chrome.runtime.onMessage.addListener(
    function(request, sendResponse) {
      if (request.message == "start") {
        // Beta Code for pulling data out of axis
        var gradeDetailBut = document.querySelectorAll("a.btn.btn-default");
        var check = false;
        var gradeButtonEvent = function() {
          check = true;
        }
        for(var i = 2; i < gradeDetailBut.length; i++) {
          gradeDetailBut[i].addEventListener("click", gradeButtonEvent); // returns true if see grade detail is pressed
        }
        sendResponse({farewell: "recieved !"});!
      }
    });

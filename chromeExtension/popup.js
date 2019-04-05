chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.nudge == "run") {
      sendResponse({message: "Message Recieved @ popup.js"});
      function fetchCategories() {
      chrome.storage.local.get(['categorieNames'], function(result) {
        console.log("Value fetched from local storage is " + result.key);
        return result.key;
      })
    }

      // Fix Bug: Forms are Highlighed Red probably because of css

      // IT FREAKING WORKS 
      // Appends categorie to Chrome Extension !
      let categories = fetchCategories();
      function updatePopup(categorie) {
        // Make first <td> and append categorie's name to it
        let categorieName = document.createElement("td");
        let node = document.createTextNode(categorie.toString());

      // All neccessary to make a form in the second <td> tag
        let weight = document.createElement("td");
          let form = document.createElement("form");
            let input = document.createElement("input");
        input.type = "number";
        input.value = "33.3";
        let row = document.createElement("tr");

      // Do all the dirty html appending
        categorieName.appendChild(node);
        let tableId = document.getElementById("categories");
        tableId.appendChild(categorieName);
        tableId.appendChild(weight.appendChild(form).appendChild(input));
        tableId.appendChild(row);
      }
      // update the table with all the categorie names and corresponding forms
      for(let i = 0; i < categories.length; i++) {
        updatePopup(categories[i]);
      }
      console.log("Table Updated With Categories");
      // Run button
      let submit = document.getElementById("submit");
      submit.addEventListener("clicked", function(){
        console.log("Submit button works");
      })
});

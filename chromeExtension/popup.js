// Currently communicates !

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.nudge == "run") {
      sendResponse({message: "Message Recieved @ popup.js"});

      // Fix Bug: Forms are Highlighed Red probably because of css

      // IT FREAKING WORKS 
      // Appends categorie to Chrome Extension !
    
      function updatePopup(categorie) {
        // Make first <td> and append categorie's name to it
        let categorieName = document.createElement("td");
        let node = document.createTextNode(categorie.toString());

      // All neccessary to make a form in the second <td> tag
      //Uneccessary indent to show they are related
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
      // fetch categories from storage
      function fetchCategories() {
        chrome.storage.local.get(['categorieNames'], function(result) {
        })
      }


      // update the table with all the categorie names and corresponding forms
      chrome.storage.local.get(['categorieNames'], function(result) {
        for(let i = 0; i < result.categorieNames.length; i++) {
          updatePopup(result.categorieNames[i]);
        }
        console.log("Table Updated With Categories " + result.categorieNames + " ");
      })
      // Run button
      let submit = document.getElementById("submit");
      submit.addEventListener("clicked", function(){
        console.log("Submit button works");
      })
    }
  })

  

      
      // function updatePopup(categorie) {
      //   // Make first <td> and append categorie's name to it
      //   let categorieName = document.createElement("td");
      //   let node = document.createTextNode(categorie.toString());

      // // All neccessary to make a form in the second <td> tag
      // //Uneccessary indent to show they are related
      //   let weight = document.createElement("td");
      //     let form = document.createElement("form");
      //       let input = document.createElement("input");
      //   input.type = "number";
      //   input.value = "33.3";
      //   let row = document.createElement("tr");

      // // Do all the dirty html appending
      //   categorieName.appendChild(node);
      //   let tableId = document.getElementById("categories");
      //   tableId.appendChild(categorieName);
      //   tableId.appendChild(weight.appendChild(form).appendChild(input));
      //   tableId.appendChild(row);
      // }
      // // update the table with all the categorie names and corresponding forms
      // for(let i = 0; i < categories.length; i++) {
      //   updatePopup(categories[i]);
      // }
      // console.log("Table Updated With Categories");
      // // Run button
      // let submit = document.getElementById("submit");
      // submit.addEventListener("clicked", function(){
      //   console.log("Submit button works");
      // })


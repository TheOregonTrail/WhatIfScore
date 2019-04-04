document.addEventListener("DOMContentLoaded", function() {
  
  function fetchCategories() {
    chrome.storage.local.get(['categorieNames'], function(result) {
      console.log("Value fetched from local storage is " + result.key);
      return result.key;
    })
  }

// Fix Bug: Forms are Highlighed Red probably because of css

// IT FREAKING WORKS 
// Appends categorie to Chrome Extension !
  let categories = [ "Exam", "Homework", "Lab" ]
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

updatePopup(categories[0]);

  //
  let submit = document.getElementById("submit");
  submit.addEventListener("clicked", function(){
    console.log("Submit button works");
  })
})
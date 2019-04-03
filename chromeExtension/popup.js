document.addEventListener("DOMContentLoaded", function() {
  
  function fetchCategories() {
    chrome.storage.local.get(['categorieNames'], function(result) {
      console.log("Value fetched from local storage is " + result.key);
      return result.key;
    })
  }

  // Modify Forms and Such here in the popup and reload it somehow ?
  let categories = fetchCategories();

  function updatePopup(categories) {
     for(let i = 0; i < categories.len; i++) {
    let form = document.createElement("td");
    form.appendChild(categories[i]);
    location.appendChild(form)
  }
}

 /*
 var para = document.createElement("td");
 var node = document.createTextNode("This is new.");
 para.appendChild(node);
 var element = document.getElementById("categories");
 element.appendChild(para);
*/

  //
  let submit = document.getElementsById("submit");
  submit.addEventListener("clicked", function(){
    console.log("Submit button works");
  })
})
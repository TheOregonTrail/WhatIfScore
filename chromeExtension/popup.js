document.addEventListener("DOMContentLoaded", function() {
  
  function fetchCategories() {
    chrome.storage.local.get(['categorieNames'], function(result) {
      console.log("Value fetched from local storage is " + result.key);
      return result.key;
    })
  }

  // Modify Forms and Such here in the popup and reload it somehow ?

  let submit = document.getElementsById("submit");
  submit.addEventListener("clicked", function() {

  }
}
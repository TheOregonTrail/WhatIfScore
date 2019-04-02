document.addEventListener("DOMContentLoaded", function() {
  
  function fetchCategories() {
    chrome.storage.local.get(['categorieNames'], function(result) {
      console.log("Value fetched from local storage is " + result.key);
      return result.key;
    })
  }

  // Modify Forms and Such here in the popup and reload it somehow ?
  let categories = fetchCategories();
  
  for(let i = 0; i < categories.len; i++) {
    let form = document.createElement("td");
    form.appendChild(categories[i]);
    location.appendChild(form)
  }

  /*
  <script>
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);
</script>
*/

  //
  let submit = document.getElementsById("submit");
  submit.addEventListener("clicked", function(){
    console.log("Submit button works");
  })
})
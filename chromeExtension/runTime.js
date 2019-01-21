document.addEventListener("DOMContentLoaded", function () {
  var submit = document.body.getElementsByTagName("button")[0];

  // A function to use as callback
  var doStuffWithDom =  function(domContent) {
      console.log('I received the following DOM content:\n' + domContent);
  }

submit.addEventListener("click", function(tab) {
  console.log("Is this working");
});
});

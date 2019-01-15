// Beta Code for pulling data out of axis
var gradeDetailBut = document.querySelectorAll("a.btn.btn-default");
var check = false;
var gradeButtonEvent = function() {
  check = true;
  console.log(check);
}
  for(var i = 2; i < gradeDetailBut.length; i++) {
    gradeDetailBut[i].addEventListener("click", gradeButtonEvent); // returns true if see grade detail is pressed
  }
  if(check) {
  // Returns Cumilitive Grade in Class
  var gradeBookFetch = document.querySelector("div.gradebook-analysis"); // returns grade book box
  var gradePercent = parseFloat(gradeBookFetch.querySelectorAll("h1")[1].firstChild.data); // returns grade in string form

  // List of all the points and  Assignments
  var assignments = gradeBookFetch.querySelectorAll("td.col-md-2");
  var gradePerAssignment = [];

  // Splits data between a /
  //
   function splitBetweenSlash(stringData) {
     var i = stringData.indexOf("/");
    if(stringData.slice(0,stringData.indexOf("/")) === "") {
      return 0;
    }
    if(stringData.slice(stringData.indexOf("/") + 1, stringData.indexOf("/") + 2) === "0") {
      return parseFloat(stringData.slice(0, stringData.indexOf("/")));
    }
    if(/\n/.test(stringData)) {
      stringData = stringData.slice(0, stringData.indexOf("\n"));
    }
    return parseFloat(stringData.slice(0, i)) / parseFloat(stringData.slice(i + 1,stringData.length));

  }

  // Creates an Array of Grade Data String Form
  for(var x = 0; x < assignments.length; x++) {
    gradePerAssignment.push(splitBetweenSlash(assignments[x].innerText));
  }
  console.log(gradePerAssignment);
  var test = 0;
  for(var x = 0; x < gradePerAssignment.length; x++) {
    test += gradePerAssignment[x];
  }
  test = test / gradePerAssignment.length;
  console.log(test);
  }

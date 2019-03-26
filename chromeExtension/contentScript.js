
// All the class Categories that make up the total grade
const classCategories = {
  Homework : "5689",
  Essay : "5696",
  Quiz : "5690",
  Writing : "5701",
  Project : "5692",
  Participation : "5694",
  ProjectsTests : "6163",
  ParticipationHomework : "6214",
  Exam : "5700",
  Lab : "5693",
  Test : "5691",
  ReadingWriting : "6212",
  SpeakingListening : "6213",
  Classwork : "5695"
}
// Returns a tuple array of both the name of the id and the id # itself
let classArr = [];
function getCategorieHeader(classCategories) {
  let divList = document.body.getElementsByTagName("div");
  for(var i = 0; i < divList.length; i++) {
    for(var o in classCategories) {
      if(divList[i].id === classCategories[o]) {
        classArr.push(o , classCategories[o]);
      }
    }
  }
  return classArr;
}

let buff = [];
let table = document.getElementsByClassName("table table-striped table-condensed table-mobile-stacked");
for(let x = 0; x < table.length; x++) {
  buff.push(table[x])
}
function getCategoriePoints() {

}
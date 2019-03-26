
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
// STUCK HERE, Can't treat class properties like an Array therefore their compare has to be different
let classArr
function getCategorieHeader(classCategories) {
  let divList = document.body.getElementsByTagName("div");
  for(let i = 0; i < classCategories.length; i++) {
    for(let o = 0; o < divList.length; o++) {
      if(divList[o].id == classCategories[i]) {
        classArr.push(classCategories[i]);
        i = 0;
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
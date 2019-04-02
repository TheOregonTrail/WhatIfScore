
// All the class Categories that make up the total grade in a class
const classCategories = [
  {"name" : "Homework", "id" : "5689"},
  {"name" : "Essay", "id" : "5696"},
  {"name" : "Quiz", "id" : "5690"},
  {"name" : "Writing", "id" : "5701"},
  {"name" : "Project", "id" : "5692"},
  {"name" : "Participation", "id" : "5694"},
  {"name" : "Project & Tests", "id" : "6163"},
  {"name" : "Participation & Homework", "id" : "6214"},
  {"name" : "Exam", "id" : "5700"},
  {"name" : "Lab", "id" : "5693"},
  {"name" : "Test", "id" : "5691"},
  {"name" : "Reading & Writing", "id" : "6212"},
  {"name" : "Speaking & Listening", "id" : "6213"},
  {"name" : "Classwork", "id" : "5695"}
  
]
// Returns a array of an array that has each instace of the classCategories and their code
let classArr = [];
function getCategorieHeader(classCategories) {
  let divList = document.body.getElementsByTagName("div");
  for(var i = 0; i < divList.length; i++) {
    for(var e = 0;  e < classCategories.length; e++) {
      if(classCategories[e].id === divList[i].id) {
        if(classCategories[e].name in classArr) {
          continue
        }
        else {
          classArr.push(classCategories[e].name);
        }
      }
    }
  }
  return classArr;
}
let categories = getCategorieHeader(classCategories)
chrome.storage.local.set(
  {"categorieNames" : categories}, function() {
    console.log("Logged " + categories.toString + " and Recorded it to Local Drive");
  });

let buff = [];
let table = document.getElementsByClassName("table table-striped table-condensed table-mobile-stacked");
for(let x = 0; x < table.length; x++) {
  buff.push(table[x])
}
function changeToForm() {

}
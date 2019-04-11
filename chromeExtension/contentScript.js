
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
  
];


// window.addEventListener("hashchange", function() {
//   let url = location.hash;
//   if(url === "#studentmyday/progress") {
//     let nothing = 0;
//   }
// })

// Hardcoded timed function to grab the headings of classes
setTimeout(function(){
  console.log("Button Ready");
  let gradeDetailBut = document.querySelectorAll("a.btn.btn-default");
  for(let i = 2; i < gradeDetailBut.length; i++) {
    
    gradeDetailBut[i].addEventListener("click", function() {
        setTimeout(function(){
          
          function convertToForm() {
            let h4 = document.getElementsByTagName("h4");
            let parent = document.getElementsByClassName("col-md-2");
        
            for(let i = 0; i < h4.length; i++) {
                if(parseFloat(h4[i].firstChild.data)) {
            
                    let form = document.createElement("form");
                    let input = document.createElement("input");
                    let totalPoints = document.createElement("h4");
            
                    totalPoints.look = document.createElement("span");
                    totalPoints.look.class = "muted";
                    totalPoints.look.appendChild(document.createTextNode(h4[i].firstElementChild.innerText))
                    totalPoints.appendChild(totalPoints.look);
            
                    input.type = "number";
                    input.value = h4[i].firstChild.data;
            
                    form.appendChild(input);
                    parent[i + 5].replaceChild(form, h4[i])
                    parent[i + 5].appendChild(totalPoints);
            
                }
            }
          }

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
            console.log(classArr);
            return classArr;
          }

          let categories = getCategorieHeader(classCategories);
          console.log(categories);
          // saves categories to local drive
          chrome.storage.local.set(
            {"categorieNames" : categories}, function() {
              console.log("Logged " + categories + " and Recorded it to Local Drive");
            });
            //Converts Point boxs to forms
            convertToForm();
            // activates popup script
          chrome.runtime.sendMessage({nudge: "run"}, function(response) {
            console.log(response.message);
          })
        },3000)
      })
    }
  },5000)
  
        
        
      // For When I get the time to actually fetch the points
      //   let buff = [];
      //   let table = document.getElementsByClassName("table table-striped table-condensed table-mobile-stacked");
      //   for(let x = 0; x < table.length; x++) {
      //     buff.push(table[x])
      //   }
      // })
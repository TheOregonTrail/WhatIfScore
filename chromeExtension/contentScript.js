
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
  {"name" : "Classwork", "id" : "5695"},
  {"name" : "Reading", "id" : "5698"},
  {"name" : "Speaking", "id" : "6067"}
  
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
        
            // FIX: Add the muted attribute to the span tag 
            // Added or statement because if a 0 was present the expression would eval false
            for(let i = 0; i < h4.length; i++) {
                if(parseFloat(h4[i].firstChild.data) === 0 || parseFloat(h4[i].firstChild.data)) {
            
                    let form = document.createElement("form");
                    form.setAttribute("class", "forms");
                    form.class = "newPoints";
                    let input = document.createElement("input");
                    let totalPoints = document.createElement("h4");
            
                    totalPoints.look = document.createElement("span");
                    totalPoints.look.class = "muted";
                    totalPoints.look.appendChild(document.createTextNode(h4[i].firstElementChild.innerText))
                    totalPoints.appendChild(totalPoints.look);
            
                    input.type = "float";
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

          var categorieNames = getCategorieHeader(classCategories);
          console.log(categorieNames);
          function getPointsPerCategorie() {
            let categorieTables = document.getElementsByClassName("table table-striped table-condensed table-mobile-stacked");
            let completeTables = [];
            for(let x = 0; x < categorieTables.length; x++) {
              let pointsPerCategorie = categorieTables[x].getElementsByTagName("form");
              let afterSlash = categorieTables[x].getElementsByTagName("h4");
              let percents = [];
              for(let y = 0; y < pointsPerCategorie.length; y++) {
                let points = parseFloat(pointsPerCategorie[y].firstChild.value);
                
                if(afterSlash[y].innerText.slice(1,afterSlash[y].innerText.length) == 0) {
                  percents.push(points / 1);
                }
                else {
                  percents.push(points / parseFloat(afterSlash[y].innerText.slice(1,afterSlash[y].innerText.length)));
                }
            }
            completeTables.push(percents);
          }
            return completeTables;
          }

    
          // saves categories to local drive
          chrome.storage.local.set(
            {"categorieNames" : categorieNames,}, function() {
              console.log("Logged " + categorieNames + " and Recorded it to Local Drive");
            });
            //Converts Point boxs to forms
            convertToForm();

            // Log Points in each categorie
            let nameAndPointsInCategories = getPointsPerCategorie(categorieNames);
            console.log(nameAndPointsInCategories);
            
            // activates popup script
          chrome.runtime.sendMessage({nudge: "run"}, function(response) {
            console.log(response.message);
          })

          var weights = [];
          chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
              console.log(sender.tab ?
                          "from a content script:" + sender.tab.url :
                          "from the extension");
              if (request.message == "run")
                sendResponse({message: "Recieved @ Content Script"});
                for(let x = 0; x < categorieNames.length; x++) {
                  chrome.storage.local.get([categorieNames[x]], function(result) {
                    weights.push(result[categorieNames[x]]);
                  })
                }
                console.log(weights);

                function enterKey(e) {
                  var keycode = (e.keyCode ? e.keyCode : e.which);
                  if (keycode == '13') {
                    var totalPoints = getPointsPerCategorie();
                    console.log(totalPoints);


                    var buff = [];
                    for(let x = 0; x < totalPoints.length; x++) {
                      let sum = 0;

                      for(let y = 0; y < totalPoints[x].length; y++) {
                        sum += totalPoints[x][y] * (weights[x] / totalPoints[x].length);
                      }
                      buff.push(sum);
                    }

                    console.log("Sum of all the points " + buff);
                    var grade = 0;
                    for(let i = 0; i < buff.length; i++){
                      grade += buff[i];
                    }
                    console.log(grade);

                    let displayedPercent = document.getElementsByTagName("h1")[1];
                    displayedPercent.innerText = grade.toFixed(4) * 100;
                  }
                }

                let numOfForms = document.getElementsByClassName("forms");
                for(let i = 0; i < numOfForms.length; i++) {
                  numOfForms[i].addEventListener("keypress", enterKey)
                }
              
            });
        },3000)
      })
    }
  },2000)
  
  
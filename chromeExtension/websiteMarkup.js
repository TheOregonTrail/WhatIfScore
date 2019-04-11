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
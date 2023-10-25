const container = document.getElementById("container");

function createDivs(rows, divs) {
    for(let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = "row";
        container.appendChild(rowDiv);
        for(let i = 0; i < divs; i++) {
            const colDiv = document.createElement('div');
            colDiv.className = "box";
            rowDiv.appendChild(colDiv);
           
        }   
    }
}



createDivs(12,12);
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener("mouseover", function(e){
    box.classList.add("black");
   
}));


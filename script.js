// Declares, DOM caches
const container = document.getElementById("container");
const editGridButton = document.querySelector('#editGridButton');
const resetButton = document.querySelector('#resetButton');
const gridSize = document.getElementById("gridSize");;
const colorClass = document.querySelector(".color");

let color = document.createElement('style');
color.type = 'text/css';
color.innerHTML = `
.color2 {
background-color: #FAFAFA;
}
`;
document.getElementsByTagName('head')[0].appendChild(color);
style = document.querySelector("style");

let squares = 15;


// Creates rows of divs then divs within rows
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

function removeDivs() {
    rows = document.querySelectorAll(".row");
    rows.forEach(row => row.parentNode.removeChild(row));
}

// Resets everything.
function resetAllBoxes() {
    removeDivs();
    gridSize.textContent = `Grid Size: ${squares} x ${squares}`;
    createDivs(squares,squares);
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener("mouseover", function(e){
        box.classList.add("color2");
    }));
}

// Main program
createDivs(squares,squares);
gridSize.textContent = `Grid Size: ${squares} x ${squares}`;
const boxes = document.querySelectorAll('.box');
resetButton.addEventListener("click", function() {
    resetAllBoxes();
    
})


// Event listener that asks user to input a number for an updated grid size
editGridButton.addEventListener('click', function() {
    squares = prompt("Grid Size");
    if (squares <= 100 && squares >= 1)
     {
        resetAllBoxes();
    }
    else if (squares === null) {

    } else {
        alert("Please type in a valid number from 1 - 100");
    }
    
})

boxes.forEach(box => box.addEventListener("mouseover", function(e){
    box.classList.add("color2");
   
}));


// This needs to be updated to allow multiple colors to coexist at the same time.
function changeColor() {
    colorPicker.style.visbility = "visible";
    // console.log(colorClass.value);
    style.innerHTML = `
    .color2 {
    background-color: ${colorClass.value};
    }
    `;
    // console.log(style);
}




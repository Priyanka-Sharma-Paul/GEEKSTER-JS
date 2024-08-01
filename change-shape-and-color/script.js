let round = document.getElementById("shapeContainer");
let colorChange = document.getElementById("colorChange");
let shapeChange = document.getElementById("shapeChange");
let shape = document.querySelector("#shapeContainer div");


function genarateColor(){
    let color = Math.floor(Math.random() * 255);
    return color;
}

function changeColor(){
    let newColor = `rgb(${genarateColor()}, ${genarateColor()}, ${genarateColor()})`;
    round.style.backgroundColor = newColor;
}

let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape(){
    let idname = randomShape();
    shape.classList.add("hidden");

    setTimeout(() => {
        shape.id = idname;
        shape.classList.remove("hidden");
    }, 1000);
    
}

shapeChange.addEventListener("click", changeShape);
colorChange.addEventListener("click", changeColor);
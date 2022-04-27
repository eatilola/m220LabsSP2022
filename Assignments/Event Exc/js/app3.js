let div = document.getElementById("changeColor");
let size = 100;

div.style.height = size + "px";
div.style.width = size + "px";
div.style.backgroundColor = "blue";

function mouseOne(){
        div.style.backgroundColor = "black";   
}

function mouseTwo(){
        div.style.backgroundColor = "blue";
}
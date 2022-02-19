let div = document.getElementById("square");
let size = 100;

div.style.height = size + "px";
div.style.width = size + "px";
div.style.backgroundColor = "green";

function increase(){
    size*= 1.1;
    div.style.height = size + "px";
    div.style.width = size + "px";
}


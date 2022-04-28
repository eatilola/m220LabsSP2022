//get elements from html
let div = [
    document.getElementById("square"),
    document.getElementById("square2"),
    document.getElementById("square3")
]

let size = 200;
//add on a listener to each square and add same styling
for(let i = 0; i <div.length;i++){
    div[i].addEventListener("click", reColor);
    div[i].style.height = size + "px";
    div[i].style.width = size + "px";
    div[i].style.backgroundColor = "gray";
    div[i].style.display = "flex";
    div[i].style.float = "left";
    div[i].style.margin = "5px";
}


//when square is clicked
function reColor(event){
//get the data attribute
let response = event.target.getAttribute("data-response");
//change the background color to the data attribute
event.target.style.backgroundColor = response;
}


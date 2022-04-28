let div = [
    document.getElementById("square"),
    document.getElementById("square2"),
    document.getElementById("square3")
]
let size = 200;
for(let i = 0; i <div.length;i++){
    div[i].addEventListener("click", reColor);
    div[i].style.height = size + "px";
    div[i].style.width = size + "px";
    div[i].style.backgroundColor = "gray";
    div[i].style.display = "flex";
    div[i].style.float = "left";
    div[i].style.margin = "5px";
}



function reColor(event){

    let response = event.target.getAttribute("data-response");

    event.target.style.backgroundColor = response;

}


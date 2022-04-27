let div = [
    document.getElementById("square"),
    document.getElementById("square2"),
    document.getElementById("square3")
]
let size = 200;
for(let i = 0; i <div.length;i++){
    div[i].style.height = size + "px";
    div[i].style.width = size + "px";
    div[i].style.backgroundColor = "gray";
}



function reColor(num){

    let currSq = num;

    for(let i = 0; i< div.length; i++){
        if(currSq == 0){
            div[currSq].style.backgroundColor = "red";
        }
        else{
            div[currSq].style.backgroundColor = "green";
        }
    }
}


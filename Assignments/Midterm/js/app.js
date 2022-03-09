let navigationElements= [
    document.getElementById("UI1"),
    document.getElementById("UI2"),
    document.getElementById("UI3"),
    document.getElementById("UI4"),
    document.getElementById("UI5"),
    document.getElementById("UI6"),
    document.getElementById("UI7")
]


function highlight(number){
    for(let i = 0; i<7;i++){
        navigationElements[i].style.backgroundColor = "white";
    }
    
    navigationElements[number].style.backgroundColor = "green";

    navigationElements[6].innerHTML = navigationElements[number].innerHTML;

}

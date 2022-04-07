
let dvStoryResult = document.getElementById("numResult");



function rando(){

   return Math.floor(Math.random() * 11);

}


function numGen(){
    let number =  rando();
    dvStoryResult.innerHTML = "The random number is: " + number;

}
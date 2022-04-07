let word = document.getElementById("unclean");
let dvStoryResult = document.getElementById("wordResult");

let clean = word.value;

let result = "";

function cleanUp(str){

   return str.replace(/#/gi, "");

}

function finish(){
    let clean = word.value;
    let result = cleanUp(clean);
    dvStoryResult.innerHTML="Cleaned Word is:" + result;
    word.value = "";
}
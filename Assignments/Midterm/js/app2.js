let scoreTxt = document.getElementById("score");
let resultTxt = document.getElementById("result");

let game = [
    document.getElementById("rock"),
    document.getElementById("paper"),
    document.getElementById("scissors"),
    document.getElementById("guard")
]

let aiChoiceNum = Math.floor(Math.random() * 3);

let aiPlay ="";

let res = "";

let count = 0;

let playerChoice = "";

function rps(number){
    aiChoiceNum = Math.floor(Math.random() * 3);

    if(aiChoiceNum == 0){
        aiPlay = game[0].innerHTML;
    }
    if(aiChoiceNum == 1){
        aiPlay = game[1].innerHTML;
    }
    if(aiChoiceNum == 2){
        aiPlay = game[2].innerHTML;
    }

    if(number == 0){
        playerChoice = game[0].innerHTML;
    }
    if(number == 1){
        playerChoice = game[1].innerHTML;
    }
    if(number == 2){
        playerChoice = game[2].innerHTML;
    }
    if(number == 3){
        playerChoice = game[3].innerHTML;
    }

    if((number==0)&&(aiChoiceNum == 2)){
        count++;
    }
    if((number == 2)&&(aiChoiceNum == 0)){
        count--;
    }
    if((number == 0)&&(aiChoiceNum == 1)){
        count--;
    }
    if((number == 1)&&(aiChoiceNum == 0)){
        count++;
    }
    if((number == 1)&&(aiChoiceNum == 2)){
        count--;
    }
    if((number == 2)&&(aiChoiceNum == 1)){
        count++;
    }
    if(number == 3 ){
        count =  Math.floor(count/2);
    }

    if(count<0){
        count =0;
    }

   
    scoreTxt.innerHTML = "Score: " + count;

    if(number == 3){
        if(count<=0){
            res = "Can't GUARD";
        }
        else{
            res = "You Chose: " + playerChoice;
        }
        //console.log("GUARDED: " + res);
        resultTxt.innerHTML = res;
    }
    else{
        res = "You chose: " + playerChoice + ", The Computer chose: " + aiPlay;
        //console.log("UNGUARDED: " + res);
        resultTxt.innerHTML = res;
    }
    
    
}
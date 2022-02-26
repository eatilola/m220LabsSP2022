let newTxt = document.getElementById("txt");

for(let i = 1; i<=25;i++){
    if(((i%5)== 0)&&((i%3) == 0)){
        newTxt.innerHTML += "beepbop ";
    }
    else{

        if((i%5)== 0){
            newTxt.innerHTML += "bop "; 
        }
        else if((i%3) == 0){
            newTxt.innerHTML += "beep ";
        }else{
            newTxt.innerHTML += i + " ";
        }
    } 
}
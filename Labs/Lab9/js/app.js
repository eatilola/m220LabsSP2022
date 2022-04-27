let txtName = document.getElementById("txtName");
let dvWordResult = document.getElementById("wordResult");
let vowRes ="";
let userWord ="";
let hold = "";





let vowels = ["a", "e", "i", "o", "u"];

function noVowels(){
    userWord =  txtName.value;
    userWord = userWord.split("");
    console.log(userWord);
    
 console.log(userWord);
    for(let w = 0; w<userWord.length;w++){
        if(userWord[w] == "a"||userWord[w] == "e"||userWord[w] == "i"||userWord[w] == "o"||userWord[w] == "u"){
            vowRes+=userWord[w];
        }
        else{
            hold+=userWord[w];
        }
    }



    console.log("This is the vowel String: " + vowRes);
    console.log("This is the Non-Vowel String: " + hold);

    dvWordResult.innerHTML = hold;
    
    vowRes = "";
    hold = "";
    txtName.value = " ";
}

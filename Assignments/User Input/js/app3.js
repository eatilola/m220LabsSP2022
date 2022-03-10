let userName = document.getElementById("userName");
let passWord = document.getElementById("passWord");
let dvStoryResult = document.getElementById("storyResult");



let result = "";

function login(){
    let user = userName.value;
    let pass = passWord.value;
    
   if(user == "Username" && pass == "Password"){
        result = "Success";
   }
   else{
       result = "Wrong Information, Try again"
   }

    dvStoryResult.innerHTML = result;
   userName.value = "";
   passWord.value = "";

}
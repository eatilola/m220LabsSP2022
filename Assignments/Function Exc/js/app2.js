let txtName = document.getElementById("txtName");
let dvStoryResult = document.getElementById("divideResult");

let number =  txtName.value;


function result(num){

    if(num % 7 == 0){
        return true;
    }
    else{
        return false;
    }

}


function divisibleBySeven(){
    let number =  txtName.value;
    number = parseFloat(number);
    let val =  number;

    let res = result(val);

    if(res){
        dvStoryResult.innerHTML = "The number: "+number +" ,is divisible by 7.";
    }
    else{
        dvStoryResult.innerHTML = "The number: "+number +" ,is NOT divisible by 7.";
    }
    txtName.value = " ";
}
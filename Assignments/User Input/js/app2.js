let txtName = document.getElementById("txtName");
let dvStoryResult = document.getElementById("storyResult");

let bill =  txtName.value;

function tiping(){
    let bill =  txtName.value;
    bill = parseFloat(bill);
    let val =  bill;

    let tips = val * 0.02;
    let total = val + tips;


    dvStoryResult.innerHTML = "Tip: $" + tips +", Total: $" + total;
    txtName.value = " ";
}
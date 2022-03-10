let txtName = document.getElementById("txtName");
let dvStoryResult = document.getElementById("storyResult");

let userName =  txtName.value;

function greeting(){
    let userName =  txtName.value;
    let val =  `${userName}`;

    dvStoryResult.innerHTML = "Hello " + val;
    txtName.value = " ";
}

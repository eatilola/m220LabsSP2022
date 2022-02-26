let newTxt = document.getElementById("txt");

let fav = ["food","money","games","books","movies"];

for(let i = 0; i<fav.length; i++){
    newTxt.innerHTML += fav[i] + ", is one of my favorite things." +"<br>";
}
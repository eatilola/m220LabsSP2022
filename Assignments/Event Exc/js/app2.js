let colorDisplay = document.getElementById("colorDisplay");
let rgbColor = document.getElementById("rgbColor");
let colorChangers = document.getElementsByClassName("colorChangers");


for (i = 0; i < colorChangers.length; i++) {
  console.log(colorChangers[i]);
  colorChangers[i].addEventListener("click", mixColor);
  colorChangers[i].style.width = "60px";
  colorChangers[i].style.height = "40px";
  colorChangers[i].style.backgroundColor = "#ccc";
  colorChangers[i].style.border = "#ccc solid 3px";
  colorChangers[i].style.color = "white";
}


red = 0;
green = 0;
blue = 0;


colorDisplay.style.backgroundColor =
  "rgb(" + red + "," + green + "," + blue + ")"; 
colorDisplay.style.width = "500px";
colorDisplay.style.height = "150px";


rgbColor.style.border = "#999 solid 3px";
rgbColor.style.width = "500px";
rgbColor.style.height = "50px";
rgbColor.style.marginTop = "50px";
rgbColor.style.color = "#999";
rgbColor.innerHTML =
  "current color: rgb(" + red + ", " + green + ", " + blue + ")";
rgbColor.style.textAlign = "center";


function mixColor(event) {

    let plus = event.target.getAttribute("data-plus"); 
  let color = event.target.getAttribute("data-color");


  if (color == "red") {
    red = red + Number(plus);
    console.log(red);
  }
  if (color == "green") {

    green = green + Number(plus);
    console.log(green);
  }
  if (color == "blue") {

    blue = blue + Number(plus);
    console.log(blue);
  }

  rgbColor.innerHTML =
    "current color: rgb(" + red + ", " + green + ", " + blue + ")";
  colorDisplay.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}
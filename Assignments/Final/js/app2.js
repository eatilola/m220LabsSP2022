//get the elements from the HTML
let dvMessage = document.getElementById("dvPrint");

//set base number to 1000
let base = 1000;

//function adds 5% of the number onto itself
function addFive(){
  //base number is divide by 10 to get tenth of number
  result = base / 10;

  //new number is then divided in helf to get a 5th of original number
  result = result/2;
  //visual representation in console.
  console.log("(Base number) " + base + " + " + "(5%) " + result);
  //base number becomes new number
  base = base + result;

  console.log("= " + base);
  

  //div is set to the new number
  dvMessage.innerHTML = base;
}


let txtString = document.getElementById("txtString");
let dvMessage = document.getElementById("dvMessage");

function check4ones() {
  let numbers = txtString.value;
  let splitNumbers = numbers.split("");
  console.log(splitNumbers);

  let one = 0;

  for (let i = 0; i < splitNumbers.length; i++) {
    console.log(splitNumbers[i]);
    console.log(splitNumbers[i], splitNumbers[i - 1], splitNumbers[i - 2]);

    if (
      splitNumbers[i] == 1 &&
      splitNumbers[i - 1] == 1 &&
      splitNumbers[i - 2] == 1
    ) {
      one = 1;
      break;
    }
  }
  if (one == 1) {
    console.log("Winner");
    dvMessage.innerHTML = "Winner";
  } else {
    console.log("not winner");
    dvMessage.innerHTML = "not winner";
  }
  txtString.value = " ";
}

let txtString = document.getElementById("txtString");
let dvMessage = document.getElementById("dvMessage");

let result = "";

function badwordCheck() {
  let sentence = txtString.value;
 
  let splitSentence = sentence.split(" ");
  console.log(splitSentence);

  let count = 0;

  for (let i = 0; i < splitSentence.length; i++) {
    if (
      splitSentence[i] == "clear" ||
      splitSentence[i] == "water" ||
      splitSentence[i] == "tires"
    ) {
      console.log("found bad word");
      count = count + 1;
    }
    console.log(splitSentence[i]);
  }
  if (count == 0) {
        result = "No bad words were found";
    console.log(result);
    dvMessage.innerHTML = result;
  }
  else {
        result = "Some bad words were found" + "\n" + "There were " + count + " bad words";
    console.log(result);
    dvMessage.innerHTML = result;
  }
  txtString.value = " ";
}
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
       //add one to count
       count = count + 1;
      }
      console.log(splitSentence[i]);
    }
    //if count equals 0 no bad words were said
    if (count == 0) {
      //print in console and HTML
      console.log("No bad words were found");
      dvMessage.innerHTML = "No bad words were found";
    }
    //else a bad word was said
    else {
      //print in console and HTML
      console.log("Some bad words were found");
      console.log("There were " + count + " bad words");
      dvMessage.innerHTML =
        "Some bad words were found. There were " + count + " bad words.";
    }
    //reset txtString to empty
  txtString.value = " ";
}
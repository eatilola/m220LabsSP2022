//get elements from html
let txtString = document.getElementById("txtString");
let dvPrint = document.getElementById("dvPrint");

//this is the array of objects
let things = [
  "cheese",
  "crackers",
  "wine",
  "knife",
  "velocipedes"
];

//this loop that prints out list
for (var i = 0; i < things.length-1; i++) {
  //creates a new div
  let newEl = document.createElement("div");
  //what is in the innerHTML
  newEl.innerHTML = things[i];
  //adds newEl to the bottom of the list
  dvPrint.appendChild(newEl);
}

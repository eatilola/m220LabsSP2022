let txtString = document.getElementById("txtString");
let dvPrint = document.getElementById("dvPrint");

let objects = [
  { color: "#FF0000", height: 100, width: 300 },

  { color: "#FFFF00", height: 200, width: 200 },

  { color: "#ff0000", height: 300, width: 100 },
];

function makeDiv() {

  for (var i = 0; i < objects.length; i++) {

    let newEl = document.createElement("div");

    newEl.innerHTML =
      "color: " +
      objects[i].color +
      " height: " +
      objects[i].height +
      " width: " +
      objects[i].width;

    dvPrint.appendChild(newEl);
  }
}

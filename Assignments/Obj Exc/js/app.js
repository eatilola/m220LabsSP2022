function setup(){
    createCanvas(800, 600);
    background(100);
}

//variables inside object - properties
let objRect = {
    height: 300,
    width: 200,
    x: 400,
    y: 300,
    size:20,
    color: "#000099"
};

function drawObj(object){
    fill(object.color);
    rect(object.x, object.y, object.height, object.width);
}

function draw(){
    background(100);
    drawObj(objRect);
}


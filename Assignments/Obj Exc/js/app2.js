function setup(){
    createCanvas(800, 600);
    background(100);
}

let objBall = {
    x: 12,
    y: 12,
    size:20,
    offsetX : 10,
    color: "#000099"
};

function draw(){
    if(mousePressed && (objBall.offsetX>0)){
        console.log("Pressed");
        objBall.offsetX -=1;
    }
    else if(!mousePressed && (objBall.offsetX<=10)){
        console.log("unpressed");
        objBall.offsetX +=1;
    }
    fill(objBall.color);
    circle(mouseX+ objBall.offsetX, mouseY, objBall.size);
}



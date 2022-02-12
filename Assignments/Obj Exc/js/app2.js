function setup(){
    createCanvas(800, 600);
}

let objBall = {
    x: 12,
    y: 12,
    size:20,
    offsetX : 0,
    color: "#000099"
};

function draw(){
    background(200);
    if(mouseIsPressed){
        console.log("Pressed");
        objBall.offsetX -=1;
    }
    else{
        console.log("unpressed");
        objBall.offsetX +=1;
    }

    if(objBall.offsetX<0){
        objBall.offsetX=0;
    }

    fill(objBall.color);
    circle(mouseX+ objBall.offsetX, mouseY, objBall.size);
}



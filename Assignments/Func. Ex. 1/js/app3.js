function setup(){
    createCanvas(800, 600);
}

function draw(){
    // creates a variable to control the radius of the polar circle
    let res = polarPoint(40);
    // makes sure the cirle isnt in the corner or off screen
    translate(100,100);
    //create circle
    circle( res.x, res.y, 10);

}

function polarPoint(r){
    //generates x variable
    let x = r * Math.sin(mouseX);
    //generates y variable
    let y = r * Math.cos(mouseX);

    //returns vector from x and y given
    return createVector(x,y);
}


// create the canvas board 
function setup(){
    createCanvas(800,600);
}

// create a variable for size
size = 25;

// check variable value
console.log(size);

// draw on board
function draw(){
    // draw new background to make sure only one circle shows at a time
    background(200)
    // draw a circle where ever the mouse is located on the board
    circle(mouseX,mouseY,size);

    // check variable value again
    console.log(size);
    
}

function mousePressed(){
    // increase circle size by 2
    size =size+2;

    // check circle size to see if it is at or above 50
    if( size >= 50){
        // keep size at 50
        size = 50;
    }

}
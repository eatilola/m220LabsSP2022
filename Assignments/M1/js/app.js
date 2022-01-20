// Emmanuel Atilola
// 1/20/2022
// m220

// create the canvas board 
function setup(){
    createCanvas(800,600);
}

// create a variable for size
let x = 400;
let y = 300;



// check variable value
console.log(size);

// draw on board
function draw(){
    // draw new background to make sure only one circle shows at a time
    background(200)
    
    fill("blue")
    // draw a circle located in the middle of the board of size 250
    circle(x,y,250);
    fill("red")
    // draw a circle located in the middle of the board of size 200
    circle(x,y,200);
    fill("blue")
    // draw a circle located in the middle of the board of size 150
    circle(x,y,150);
    fill("red")
    // draw a circle located in the middle of the board of size 100
    circle(x,y,100);
    fill("blue")
    // draw a circle located in the middle of the board of size 50
    circle(x,y,50);


    // check variable value again
    console.log(size);
    
}

/*function mousePressed(){
    // increase circle size by 2
    size =size-10;

    
    // check circle size to see if it is at or above 50
    if( size <= 0){
        // keep size at 50
        size = 0;
    }

}*/
function setup(){
    createCanvas(400,300);
}

function draw(){

    //check mouse coordinates too see if mouse is on the right
    if(mouseX> 200){
        //make circle red
        fill("red")
    }
    else{
        //if mouse on the left make circle blue
        fill("blue")
    }
    // background to remove other circles
    background(200)
//draw circle
circle(mouseX, mouseY, 50)


}
function setup(){
    createCanvas(800, 600);
    background(100);
    drawKeys(300, 300);
}

function drawKeys(x, y){
    //circle(400, 300, 60);
    circle(x, y, 60);
    //rect(430, 290, 100, 20);
    rect(x+30, y-10, 100, 20);
    //triangle(500,310, 515, 340, 530,310);
    triangle(x+100, y+10, x+115, y+40, x+130, y+10);
}

function draw(){
    
    background(100);
    //draw a key at the mouses position
    drawKeys(mouseX,mouseY);
}
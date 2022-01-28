function setup(){
    createCanvas(800,600);
}
// speed for x velocity
xspeed = 5;
//speed for y velocity
yspeed =5;

// x starting position
x = 800;

//y starting position
y = 0;

function draw(){

// background to remove other circles
background(200)

// changing x position with x speed
 x = x-xspeed;

//changing y position with y speed
 y = y+yspeed;
 console.log("not at bounds: "+x);

 // checking x bounds for impact
 if(x >= 800 || x <= 0){
     //reversing x speed
     xspeed *= -1;
     console.log("at bounds: "+x);
 }

//checking y bounds
 if(y >= 600 || y <= 0){
     //reversing y speed
        yspeed *= -1;
 }
//draw circle
circle(x,y, 50)

}
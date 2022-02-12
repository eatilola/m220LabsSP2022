function setup(){
    createCanvas(800,600);
}

let objBall ={
// x starting position    
x: 800,
//y starting position
y: 0,
// speed for x velocity
xspeed: 5,
//speed for y velocity
yspeed: 5,
// ball size
size: 50,
//color ball red
color: "red"
};

console.log("Xspeed: " + objBall.xspeed);
console.log("Yspeed: " + objBall.yspeed);

function draw(){

// background to remove other circles
background(200)

// changing x position with x speed
objBall.x = objBall.x - objBall.xspeed;
//x = x-xspeed;

//changing y position with y speed
objBall.y = objBall.y + objBall.yspeed;
//y = y+yspeed;

 //console.log("not at bounds: "+x);

 // checking x bounds for impact
 if(objBall.x >= 800 || objBall.x <= 0){
    //reversing x speed
    objBall.xspeed *= -1;
    console.log("at bounds: "+objBall.x);
}
//  if(x >= 800 || x <= 0){
//      //reversing x speed
//      xspeed *= -1;
//      console.log("at bounds: "+x);
//  }

//checking y bounds
if(objBall.y >= 600 || objBall.y <= 0){
    //reversing y speed
       objBall.yspeed *= -1;
}
//  if(y >= 600 || y <= 0){
//      //reversing y speed
//         yspeed *= -1;
//  }
fill(objBall.color);

//draw circle
circle(objBall. x,objBall.y, objBall.size);

}
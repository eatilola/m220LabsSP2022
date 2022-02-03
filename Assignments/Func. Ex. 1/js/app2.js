function setup(){
    createCanvas(800, 600);
    background(100);
    //create color
    let baseRed = color(255, 200, 150);
    //color the circle with red color
    fill(baseRed);
    //create colored circle
    circle(600, 300, 100);
    //put created color into removeRed function
    let noRed = removeRed( color(255, 200, 150) );
    //color the circle with red removed color
    fill(noRed);
    //created colored circle
    circle(200, 300, 100);
}

//function to remove the red color form any given color
function removeRed(color){ 
//set red color of the given color to 0
color.setRed(0);
// returns the newly changed color
return color;
}



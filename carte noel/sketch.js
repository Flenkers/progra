let JoyeuxNoel;

let sky;

let isCircleClicked = false; 

function setup(){
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    background (0, 0, 0);
    fill(255, 0, 0);
    circle(20, 50, 70);
    
    
   /* if(isCircleClicked){
        fill(255);
        text("Joyeux Noel", width/2, height/2);
    }*/
}


function mouseReleased(){
    
    let distX = mouseX - 20;
    let distY = mouseY - 50;
    let dist = sqrt(distX * distX + distY * distY);//pythagor
    if(dist<70/2){
        document.querySelector("label").style.display = "block";
    }
}
    
//    function action
/*
if(isCircleClicked) on circle{
    JoyeuxNoel(pop)
    

}*/

    
    7



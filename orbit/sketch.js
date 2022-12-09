function setup() {
  // put setup code here
   createCanvas(windowWidth, windowHeight)
  
    
}

function draw() {
  // put drawing code here
    background(0);
    translate(width/2, height/2);
    
    push();
    rotate(millis() / 1000 );
       fill(255,128,0)
    ellipse(0, 0, 70, 70);
    
    
    fill(255, 255, 0);
    rectMode(CENTER);
   ellipse(0, 0, 50, 50);
   
   pop();
  
    translate(0, 0);
    
    rotate(millis() / 3000);
    fill(0, 128, 255);
    ellipse(270, 0, 60, 60);
    
    
   
    rotate(millis() /-1000);
    fill(220,20,60);
    ellipse(-400, 0, 150, 150);
    
    
    
     rotate(millis() /-3000);
    fill(128,0,128);
    ellipse(-100, 0, 20, 20);
    
    
    
      rotate(millis() / 2000);
    fill(128,128,0);
    ellipse(-150, 0, 50, 50);
    
    
    
    
     rotate(millis() / -1000);
    fill(128,0,0);
    ellipse(-210, 0, 30, 30);
    

    
     rotate(millis() / -500);
    fill(128,128);
    ellipse(-230, 0, 10, 10);
    

     rotate(millis() / 700);
    fill(0,0,128);
    ellipse(-1190, 0, 50, 50);
    
    
    
    
    
     rotate(millis() / 300);
    fill(0,0,128);
    ellipse(50, 0, 10, 10);
    
    
    
    
}
    
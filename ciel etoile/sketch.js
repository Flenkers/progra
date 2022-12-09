let degwade;




function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    degwade = linearGradiant(width, height, 156, 50, 100, 20, 50, 20);
}

function linearGradiant(w, h, r1, v1, b1, r2, v2, b2){
    let graphic = createGraphics(w, h);
    for(let compteur = 0 ; compteur < h ; compteur++ ){
        let red = map(compteur, 0, h,  r1, r2);
        let green = map(compteur, 0, h, v1, v2);
        let blue = map (compteur, 0, h, b1, b2);
        graphic.stroke(red, green, blue);
        graphic.line(0, compteur, w, compteur);
    }
    return graphic;
}
function draw() {
  // put drawing code here
    background(13, 5, 45);
    image(degwade, 0, 0);
    
    
    stroke(255);
    let counter = 0;
    while(counter < 100){
    mouliStar(
         noise(1, millis()*0.001, counter)*width,
        noise(2.1, millis()*0.001, counter)*height,
         noise(3, counter) * 5,
         noise(4, counter) * 5
        );
         
    counter++
     }
}



function mouliStar(x, y, w, h){
    push();
    translate(x, y);
    if(frameCount%5==0){
        line(-w/2, 0, w/2, 0);
    }else{
        line(0, -h/2, 0, h/2);
    }
    pop()
}
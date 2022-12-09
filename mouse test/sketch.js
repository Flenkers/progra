function setup(){
    createCanvas(100, 100);
   var cursor = document.getElementById('cursor');
    document.addEventListener('mousemove' , function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    });
 }
7

function draw(){
    clear();
    fill(0);
    ellipse(noise(1, frameCount*0.1)*width, noise(2, frameCount*0.1)*height, 5, 5)
    
}
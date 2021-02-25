var canvas;
var music;
var r1;
var r2;
var r3;
var r4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    r1 = createSprite(100,580,200,15);
    r1.shapeColor="blue";
    
   r2 = createSprite(250,580,200,15);
    r2.shapeColor="yellow";

    r3 = createSprite(450,580,200,15);
    r3.shapeColor="red";

    r4 = createSprite(675,580,250,15);
    r4.shapeColor="green";

    box = createSprite(random(20,750),100,40,40)
    box.velocityY=4;
    box.velocityX=5;
    box.shapeColor="white";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    drawSprites();

    box.bounceOff(edges);
    

    if (box.isTouching(r1)){
        box.shapeColor="blue";
        box.bounceOff(r1)
       
    }
    else if (box.isTouching(r2)){
        box.shapeColor="yellow";
        box.bounceOff(r2)
        musicSound.play()
    }
    else if (box.isTouching(r3)){
        box.shapeColor="red";
        box.bounceOff(r3)
        
    }
    else if (box.isTouching(r4)){
        box.shapeColor="green";
        box.bounceOff(r4)
        
    }
    


}





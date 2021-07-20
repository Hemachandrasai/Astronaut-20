var space,spaceImg;
var astronaut;




function preload(){
    spaceImg = loadImage("iss.png");
    astronautsleep = loadAnimation("sleep.png");
    astronautbrush = loadAnimation("brush.png");
    astronauteat   = loadAnimation("eat1.png","eat1.png","eat2.png","eat2.png");
    astronautgym   = loadAnimation("gym1.png","gym2.png");
    astronautgym2  = loadAnimation("gym11.png","gym11.png","gym12.png","gym12.png");
    astronautmove  = loadAnimation("move.png","move.png","move1.png","move1.png");
    astronautbath  = loadAnimation("bath1.png","bath1.png","bath2.png","bath2.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    space = createSprite(width/2,height/2);
    space.addImage(spaceImg);
    space.scale = 0.24;

    astronaut = createSprite(width-600,height-180);
    astronaut.addAnimation("sleep",astronautsleep);
    astronaut.scale = 0.12;
    

}
function draw(){
    background(0);
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

    if (keyDown("UP_ARROW")){
        astronaut.addAnimation("brushing",astronautbrush);
        astronaut.changeAnimation("brushing")
        astronaut.y = 290;
        astronaut.velocityY = 0;
        astronaut.velocityX = 0;
    }
    if (keyDown("RIGHT_ARROW")){
        astronaut.addAnimation("eating",astronauteat);
        astronaut.changeAnimation("eating");
        astronaut.y = 290;
        astronaut.velocityY = 0;
        astronaut.velocityX = 0;
    }
    if (keyDown("LEFT_ARROW")){
        astronaut.addAnimation("bathing",astronautbath);
        astronaut.changeAnimation("bathing");
        astronaut.y = 290;
        astronaut.velocityY = 0;
        astronaut.velocityX = 0;
    }
    if (keyDown("DOWN_ARROW")){
        astronaut.addAnimation("gym",astronautgym);
        astronaut.changeAnimation("gym");
        astronaut.y = 290;
        astronaut.velocityY = 0;
        astronaut.velocityX = 0;
    }
    if (keyDown("f")){
        astronaut.addAnimation("moveing",astronautmove);
        astronaut.changeAnimation("moveing");
        astronaut.y = 290;
        astronaut.velocityY = 1;
        astronaut.velocityX = 1;
    }
    if (keyDown("g")){
        astronaut.addAnimation("gym2",astronautgym2);
        astronaut.changeAnimation("gym2");
        astronaut.y = 320;
       // astronaut.x = 280
        astronaut.velocityY = 0;
        astronaut.velocityX = 0;
        astronaut.scale = 0.12;

    }



    drawSprites();
    fill("white");
   stroke("black")
   text ("DOWN ARROW = GYM",10,35);
   text ("UP ARROW = BATH",10,20);
   text ("LEFT ARROW = BATH",10,50);
   text ("RIGHT ARROW = EAT",10,65);
   text ("G ARROW = GYM2",10,80);
   text ("F ARROW = MOVE",10,95);

}   

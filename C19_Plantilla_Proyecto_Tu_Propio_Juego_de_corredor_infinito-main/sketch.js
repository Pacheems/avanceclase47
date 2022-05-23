var oceanImg;
var sandImg;
var axolotlImg, jeffrey;
var sandGroup, sandBlock;
var gameState = "play"

function preload(){
  oceanImg = loadImage("fondo.jpg");
  sandImg = loadImage("obstaculo.jpg");
  axolotlImg = loadImage("ajolote.png");
}
function setup() {
  createCanvas(600, 600);
  ocean = createSprite(300,600);
  ocean.addImage("ocean",oceanImg);
  ocean.velocityY = 1;

  jeffrey=createSprite(200,200,50,50);
  jeffrey.scale=0.1;
  jeffrey.addImage(axolotlImg);


  //grupos
doorsGroup=new Group();
climbersGroup=new Group();
sandBlockGroup=new Group();


}

function draw() {
  background(200);
  if(gameState=="play"){
  if(keyDown("left_arrow")){
    jeffrey.x-=3;
  }
  
  if(keyDown("right_arrow")){
    jeffrey.x+=3;
    }

    if(keyDown("space")){
      jeffrey.velocityY=-10;
      }

      jeffrey.velocityY+=0.8;


      if(ocean.y > 210){
        ocean.y = 200

      }
      spawnDoors();
      if(climbersGroup.isTouching(jeffrey)){
        jeffrey.velocityY=0;
      
      }

    if(sandBlockGroup.isTouching(jeffrey)||jeffrey.y>600){
      jeffrey.destroy();
      gameState="end";
    }
    drawSprites();
  }

}

function spawnDoors() {
if (frameCount %240==0){
door=createSprite(200, -50)
door.addImage(doorImg);
door.x=Math.round(random(120,400));
door.velocityY=1;

climber=createSprite(200,10);
climber.addImage(climberImg);
climber.x=door.x;
climber.velocityY=1;

sandBlock=createSprite(200,15);
sandBlock.width=climber.width;
sandBlock.height=2;
sandBlock.x=door.x;
sandBlock.velocityY=1;

jeffrey.depth=door.depth;
jeffrey.depth+=1;

//tiempo de vida
door.lifetime=800;
climber.lifetime=800;
sandBlock.lifetime=800;
//agregar a grupos
doorsGroup.add(door);
climbersGroup.add(climber);
sandGroup.add(sandBlock);
sandBlock.debug=true;
}



}
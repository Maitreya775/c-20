var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400,200,50,40)
  movingRect.shapeColor="red"
  fixedRect=createSprite(200,100,30,30)
  fixedRect.shapeColor="magenta" 
  }

function draw() {
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x)
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor="darkgreen"
  fixedRect.shapeColor="darkgreen"
  }
  else{
  movingRect.shapeColor="red"
  fixedRect.shapeColor="magenta"
  } 
  background(255,255,255);  
  drawSprites();
}

var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200,50,100);
  movingRect.shapeColor ="blue";
  movingRect.debug = true;
  fixedRect = createSprite(600,250,100,50);
  fixedRect.shapeColor ="blue";
  fixedRect.debug = true;
  gameobject = createSprite(100,100,50,50);
  gameobject.shapeColor ="blue";
  gameobject.debug = true;
  playobject = createSprite(200,100,50,50);
  playobject.shapeColor ="blue";
  playobject.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(isTouching(movingRect, playobject)){
    movingRect.shapeColor ="red";
    playobject.shapeColor ="red";
  }else{
    movingRect.shapeColor ="blue";
    playobject.shapeColor ="blue";
  }

  
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x-object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2
    && object1.y - object2.y < object2.height/2 + object1.height/2 ){
   return true;

  }else{

    return false;
  }


}

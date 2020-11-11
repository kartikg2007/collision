var mr,fr;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  mr = createSprite(400, 200, 100, 50);
  fr = createSprite(800, 400, 50, 100);

  rect1 = createSprite(200, 500, 100, 50);
  rect2 = createSprite(500, 700, 100, 50);

  mr.shapeColor="green";
  fr.shapeColor="green";
  rect2.shapeColor="green";
  rect1.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  

  mr.x=World.mouseX;
  mr.y=World.mouseY;
if(isTouching(mr,rect2)){
  mr.shapeColor="red";
  rect2.shapeColor="red";

}

else{
  mr.shapeColor="green";
  rect2.shapeColor="green";
}
if(isTouching(mr,rect1)){
  mr.shapeColor="red";
  rect1.shapeColor="red";

}

else{
 // mr.shapeColor="green";
  rect1.shapeColor="green";
}


  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2&&
    obj2.x-obj1.x<obj1.width/2+obj2.width/2&&
    obj1.y-obj2.y<obj1.height/2+obj2.height/2&&
    obj2.y-obj1.y<obj1.height/2+obj2.height/2){

      return true;
    }
    else{
      return false;
    }
}
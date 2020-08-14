var fixrect,movingrect,o1,o2,o3;
function setup() {
  createCanvas(800,400);
 fixrect= createSprite(400, 200, 50, 50);
 fixrect.shapeColor="red";
 fixrect.debug=true;
 movingrect=createSprite(0,200,50,50);
 movingrect.shapeColor="red";
 movingrect.debug=true;
 o1=createSprite(300,150,40,40);
 o1.shapeColor="green";
 o2=createSprite(250,200,40,40);
 o2.shapeColor="green";
o3=createSprite(100,350,40,40);
o3.shapeColor="green";
}

function draw() {
  background(0); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 
 if(isTouching(movingrect,o3)){
  o3.shapeColor="blue";
  movingrect.shapeColor="blue";
}else{
  o3.shapeColor="green";
  movingrect.shapeColor="red";
 }
  drawSprites();
}

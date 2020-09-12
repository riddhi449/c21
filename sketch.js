var fixedrect,movingrect,thirdrect




function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(400,200,100,50);
  thirdrect = createSprite (100,100,50,50);
  thirdrect.shapeColor = "orange";
  fixedrect.shapeColor = "orange";
  movingrect.shapeColor = "orange";
}

function draw() {
  background(255,255,255);
  if(check(movingrect,fixedrect)){
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "blue";
    
  }
  else if(check(movingrect,thirdrect)){
    movingrect.shapeColor = "purple";
    thirdrect.shapeColor = "purple";
  }
  else{
    movingrect.shapeColor = "orange";
    thirdrect.shapeColor = "orange";
    fixedrect.shapeColor = "orange";
  }
 

  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  

  
  
  drawSprites();
}




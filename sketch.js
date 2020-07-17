var hall1,hall2,hall3;
var rand, backsprite;

function preload(){
  hall1 = loadImage("images/halloween.png");
  hall2 = loadImage("images/halloween2.jpg");
  hall3 = loadImage("images/halloween3.jpg");
}

function setup(){
  createCanvas(displayWidth,displayHeight-100);
  backsprite = createSprite(displayWidth/2,(displayHeight-100)/2,displayWidth,displayHeight);  
}

function draw(){
  if(frameCount % 100 === 0){
    rand = Math.round(random(1,3));
    switch(rand){
      case 1 : backsprite.addImage("1",hall1);
      break;
      case 2 : backsprite.addImage("2",hall2);
      break;
      case 3 : backsprite.addImage("3",hall3);
      break;
    }
    backsprite.width = displayWidth;
    backsprite.heigth = displayHeight-100;
    backsprite.velocityX = -5;
  }
  if(backsprite.x<=0){
    backsprite.x = backsprite.width/2;
  }
  
  drawSprites();
}
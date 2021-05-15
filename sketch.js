
var score=0;

function preload(){
  backgroundImg = loadImage("lol.jpg");
  pikaImg = loadImage("Pikachu_Brawl.png")

  eballImg= loadImage("eball.png");
  fireImg = loadImage ("fierball.png");
  wballImg = loadImage("wball.png");
}



function setup() {
  createCanvas(1200,800);
  bg = createSprite(600,400,1200,800);
  bg.addImage(backgroundImg)
bg.velocityX = -2;


pikachu = createSprite (100,500, 2,5);
pikachu.addImage (pikaImg);
pikachu.scale =0.2;
invisibleGround = createSprite (600,1200,1200, 800)
  invisibleGround.visible = false;

  eballGroup = new Group();
  wballGroup = new Group();
  fireballGroup = new Group();
}

function draw() {
  background(0);  
 

 
 if(bg.x <200){
   bg.x= 600;
 }   
 
 if(eballGroup.isTouching(pikachu)){

  score = score +1;
  eballGroup.destroyEach()
 }
 

 if(keyDown("space")){
   pikachu.velocityY = -15;
   
 }
 pikachu.velocityY = pikachu.velocityY +0.5
 pikachu.collide(invisibleGround);
 Eball();
 Fireball();
 Wball();
  drawSprites();
  textSize(35);
  fill ("yellow")
 text ("SCORE = " +score, 1000,100);
}


function Eball(){
  if(frameCount % 250===0){
   eball = createSprite ( 1200, 700, 10, 10);
   eball.addImage(eballImg)
    eball.velocityX = -9;
    eball.scale = 0.1;

    eballGroup.add(eball);
   

  }
}


function Fireball(){
  if(frameCount %150===0){
    fireball = createSprite ( 800, 600, 10, 10);
    fireball.addImage(fireImg)
    fireball.velocityX = -7;
    fireball.scale = 0.1;
    fireballGroup.add(fireball);
   }
}


function Wball(){
  if(frameCount % 100===0){
    wball = createSprite ( 1000, 650, 10, 10);
    wball.addImage(wballImg)
    wball.velocityX = -5;
    wball.scale = 0.1;
    wballGroup.add(wball);
   }
}
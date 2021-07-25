var bgimg;
var boy1,boy1img,boy2,boy2img
var gun1,gun1img,gun2img,gun2
var bulltes1,bulltes2,bullets1img,bullets2img
var GameState="Play"
var bullet1grp,bullet2grp
var background2,backgroung2img
var score=0
var score2=0
var lives2=5
var lives=5









function preload(){
bgimg=loadImage("background.gif")
background2=loadImage("background2.jpeg")
boy1img=loadImage("boy1.png")
boy2img=loadImage("boy2.png")
gun1img=loadImage("gun1.gif")
gun2img=loadImage("gun2.gif")
bullets1img=loadImage("bullet1.gif")
bullets2img=loadImage("bullet2.gif")


}

function setup() {
  createCanvas(1500, 800);
boy1=createSprite(1200,400,80,80)
boy2=createSprite(100,400,80,80)
gun1=createSprite(1130,330,80,80)
gun2=createSprite(150,320,80,80)



boy2.scale=0.7
boy1.scale=0.7
gun1.scale=0.6
gun2.scale=0.4


boy1.addImage(boy1img)
boy2.addImage(boy2img)
gun1.addImage(gun1img)
gun2.addImage(gun2img)

bullet1grp=new Group()
bullet2grp=new Group()

  
 
  
}

function draw() {
  


 
  

  
  if (GameState==="Play"){

    background(bgimg);
textSize(25)
fill("green")
text("Adam:)"+score,500,100)
text("Chrono:)"+score2,500,150)
text("lives of adam>:<"+lives,700,100)
text("lives lives of chrono:)"+lives2,700,150)
if(keyWentDown("d")){
 Spawnleftbullets();


 } 
if(keyDown(UP_ARROW)){
  boy1.y=boy1.y-20
    
 }
 
 if(keyDown(DOWN_ARROW)){
  boy1.y=boy1.y+20
    
 }
 if(keyDown("w")){
  boy2.y=boy2.y-20
    
 }
 if(keyDown("s")){
  boy2.y=boy2.y+20
    
 }
 if(keyWentUp(LEFT_ARROW)){
  Spawnrightbullets();
 }
 gun1.y=boy1.y-40
 gun2.y=boy2.y-80
if(lives<-300||lives2<-300){
GameState="End"
}

  }
if (GameState==="End"){
  background(background2) 
  bullet1grp.destroyEach()
  bullet2grp.destroyEach()
  gun1.destroy()
  gun2.destroy()  
  boy1.destroy()
  boy2.destroy()


}
if(bullet2grp.isTouching(boy2)){
  Firstplayerscore(); 
}
if(bullet1grp.isTouching(boy1)){
  Secondplayerscore();
}

 
 
  drawSprites();

  
}



  
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + Math.round(score/100));
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
    switch(rand){
      case 1: obstacle.addImage("Sprites/obstacle1", obstacleImages1);
        break;
        
      case 2: obstacle.addImage("Sprites/obstacle2",obstacleImages2);
        break;
        
      case 3: obstacle.addImage("Sprites/obstacle3",obstacleImages3);
        break;
        
      case 4: obstacle.addImage("Sprites/obstacle4",obstacleImages4);
        break;
        
      case 5: obstacle.addImage("Sprites/obstacle5",obstacleImages5);
        break;
        
      case 6: obstacle.addImage("Sprites/obstacle6",obstacleImages6);
        break;
        
      default: break; 
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    
    GroupObstacles.add(obstacle);
  }

}

function Spawnleftbullets(){

 bullets1=createSprite(150,boy2.y,80,80)
 bullets1.addImage(bullets1img)
 bullets1.velocityX=10
 bullets1.scale=0.2
bullet1grp.add(bullets1)

}
function Spawnrightbullets(){

  bullets2=createSprite(1135,boy1.y,80,80)
  bullets2.addImage(bullets2img)
  bullets2.velocityX=-10
  bullets2.scale=0.2
  bullet2grp.add(bullets2)
} 
function Firstplayerscore (){
  score=score+1
  lives2=lives2-1


}
function Secondplayerscore (){
  score2=score2+1
  lives=lives-1
}
  

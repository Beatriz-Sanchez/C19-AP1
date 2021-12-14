var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg, jumpingImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  jumpingImg = loadImage("ghost-jumping.png");
  //spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);

  //criando um fundo e fazendo-o mover
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 2;
  
  //criando fantasma e adicionando as imagens a ele
  ghost = createSprite(300,200);
  ghost.scale = 0.4;
  ghost.addImage("standing",ghostImg);
  ghost.addImage("jumping", jumpingImg);
}

function draw() {
  background(200);
  
  //tornando o fundo infinito
  if(tower.y > 600){
    tower.y = 0;
  }

  drawSprites();
}

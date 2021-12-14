var torreImg, torre;
var portaImg, porta, grupoPorta;
var escaladorImg, escalador, grupoEscaladores;
var fantasma, fantasmaImg, puloImg;
var grupoInvisivel, blocoInvisivel;
var estadoJogo = "jogar";

function preload(){
  torreImg = loadImage("torre.png");
  portaImg = loadImage("porta.png");
  escaladorImg = loadImage("escalador.png");
  fantasmaImg = loadImage("fantasma.png");
  puloImg = loadImage("fantasma-pulo.png");
  //spookySound = loadSound("assustador.wav");
}

function setup() {
  createCanvas(600, 600);

  //criando um fundo e fazendo-o mover
  torre = createSprite(300,300);
  torre.addImage("torre",torreImg);
  torre.velocityY = 2;
  
  //criando fantasma e adicionando as imagens a ele
  fantasma = createSprite(300,200);
  fantasma.scale = 0.4;
  fantasma.addImage("fantasma",fantasmaImg);
  fantasma.addImage("pulo", puloImg);
}

function draw() {
  background(200);
  
  //tornando o fundo infinito
  if(torre.y > 600){
    torre.y = 0;
  }

  drawSprites();
}

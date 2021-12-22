//professora meu notebook não estava ligando tanto é que eu até mandei mensagem para você então dei meu notebook para meu tio pois ele é bom em arrumar 
//tanto é que levou um dia para arrumar (só que eu não posso mais desligar o notebook) enfim eu fiz esse projeto aqui de 200 aulas atras.




//variaveis
var fundo;

var tom;
var tomDormindo,tomCorrendo,tomFim;

var jerry;
var jerryParado,jerryChamando,jerryFim;

function preload() {
    
  //carrega a imagem do fundo
  fundo = loadImage("imagens/garden.png");


  //carrega as animaçoes do tom
  tomDormindo = loadAnimation("imagens/cat1.png");
  tomCorrendo = loadAnimation("imagens/cat2.png","imagens/cat3.png");
  tomFim = loadAnimation("imagens/cat4.png");

  //carrega as animaçoes do jerry
  jerryParado = loadAnimation("imagens/mouse1.png");
  jerryChamando = loadAnimation("imagens/mouse2.png","imagens/mouse3.png");
  jerryFim = loadAnimation("imagens/mouse4.png");

}


function setup() {
  canvas = createCanvas(1000, 800);
    
  //cria o sprites do tom é coloca a animaçao
  tom = createSprite(800,700,20,20);
  tom.addAnimation("parado",tomDormindo);
  tom.addAnimation("andando",tomCorrendo);
  tom.addAnimation("fim",tomFim);
  tom.scale = 0.1;

  //cria o sprites do jerry é coloca a animaçao
  jerry = createSprite(120,700,20,20);
  jerry.addAnimation("stop",jerryParado);
  jerry.addAnimation("chamando",jerryChamando);
  jerry.addAnimation("acabou",jerryFim);
  jerry.scale = 0.1;
}

function draw() {
    background(fundo);
  
    //mostra a hitbox do tom e jerry quando estiver true
    tom.debug = false;
    jerry.debug = false;


    //muda a hitbox para ficar mais perfeito a colisão entre o tom e o jerry
    tom.setCollider("circle",0,0,450);
    jerry.setCollider("circle",0,0,250);

    teclaPrecionada()

  //quando o jerry encostar no tom
   if(tom.isTouching(jerry)){
      jerry.changeAnimation("acabou",jerryFim);
      tom.changeAnimation("fim",tomFim);
      tom.velocityX = 0;
   }



   drawSprites();
}



//função quando precionar a tecla para a esquerda
function teclaPrecionada() {
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -4;
    tom.changeAnimation("andando",tomCorrendo)

    jerry.changeAnimation("chamando",jerryChamando)
  }
    
}


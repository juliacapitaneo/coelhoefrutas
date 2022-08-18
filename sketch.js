var garden, apple, orangeL, redL, rabbit;
var gardenImg, appleImg, orangeImg, redImg, rabbitImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup() {
  createCanvas(400, 400);

  // mover o fundo
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(100, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  rabbit.x = World.mousex;
}

function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1, 3));
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    } else {
      createRed();
    }
  }

  rabbit.x = World.mouseX;

  drawSprites();
}

function createApples() {
  apple = createSprite(random(50, 350), 48, 10, 10);
  apple.velocityY = 3;
  apple.addImage("maca", appleImg);
  apple.scale = 0.07;
  apple.lifeTime = 150;
}
function createOrange() {
  orangeL = createSprite(random(50, 350), 48, 10, 10);
  orangeL.velocityY = 3;
  orangeL.addImage(orangeImg);
  orangeL.scale = 0.08;
  orangeL.lifeTime = 150;
}
function createRed() {
  redL = createSprite(random(50, 350), 48, 10, 10);
  redL.velocityY = 3;
  redL.addImage(redImg);
  redL.scale = 0.06;
  redL.lifeTime = 150;
}

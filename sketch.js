
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree; 
var ground;
var boyImage;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree1 = new Tree(670, 610);
	tree1.scale = 2;

	ground1 = new Ground(width/2, 600, 20, width);

	stone1 = new Stone(200, 460, 30);

	mango1 = new Mango(700, 50, 30)
	mango2 = new Mango(750, 200, 40)
	mango3 = new Mango(600, 200, 35)
	mango4 = new Mango(625, 300, 35)
	mango5 = new Mango(775, 275, 35)
	mango6 = new Mango(840, 225, 30)
	mango7 = new Mango(680, 150, 30)
	mango8 = new Mango(525, 230, 35)
	mango9 = new Mango(600, 100, 40)
	mango10 = new Mango(810, 100, 35)

	launcherObject=new launcher(stone1.body,{x:200,y:460})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boyImage,150, 400, 250, 250);

  tree1.display();
  
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  launcherObject.display();
  ground1.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  detectollision(stone1,mango10);
 

  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

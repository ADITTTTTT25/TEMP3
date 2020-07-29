
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boy;
var rope;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 2000);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  mango1 = new Mango(1200,1300,100,100);
  mango2 = new Mango(1300,1300,100,100)
  mango3 = new Mango(1400,1300,100,100)
  mango4 = new Mango(1500,1300,100,100)
  mango5 = new Mango(1300,1200,100,100)
	tree = new Tree(600,600);
	ground = new Ground(1000,1990,2000,20);
	stone = new Stone(500,1850,100,100);
	boy = new Boy(500,1900);
	rope = new Rope(stone.body,{x:375,y:1800})
	
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);
 
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();
  boy.display();
  rope.display();
  stone.display();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
    rope.fly();
}




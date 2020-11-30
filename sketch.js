
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var bin1, bin2, bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(width/2, height-50, width, 25);


	paper1 = new Paper(200, 90, 30);
	bin1 = new Bin(1150, 423, 200, 20);
	bin2 = new Bin(1040, 383, 20, 100);
	bin3 = new Bin(1250, 383, 20, 100);

	
	Engine.run(engine);
	keyPressed();
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper1.body, paper1.body.position, {x:100, y:-100});
	}
}


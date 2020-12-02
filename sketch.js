
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,650,20,20);

	//Create the Bodies Here.

	line1 = createSprite(600, 650, 150, 20);
	line1.shapeColor = ("red");

	line2 = createSprite(520, 610, 20, 200);
	line2.shapeColor = ("red");

	line3 = createSprite(670, 610, 20, 200);
	line3.shapeColor = ("red");

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}




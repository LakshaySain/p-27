
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	q1 = createSprite(400,80,500,50)
q2 = createSprite(400,300,5,400)
q2.shapeColor = "white"

q3 = createSprite(300,300,5,400)
q3.shapeColor = "white"

q4 = createSprite(200,300,5,400)
q4.shapeColor = "white"

q5 = createSprite(500,300,5,400)
q5.shapeColor = "white"

q6 = createSprite(600,300,5,400)
q6.shapeColor = "white"
 
q7 = createSprite(200,500,50,50)
q7.shapeColor = "purple"

q8 = createSprite(300,500,50,50)
q8.shapeColor = "purple"

q9 = createSprite(400,500,50,50)
q9.shapeColor = "purple"

q10 = createSprite(500,500,50,50)
q10.shapeColor = "purple"

q11 = createSprite(600,500,50,50)
q11.shapeColor = "purple"



Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




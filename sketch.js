
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall
var wall2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var ground_options = {
		isStatic : true
	}

	var wall_options = {
		isStatic : true
	}

	var ball_options = {
		isStatic : false,
		restitution: 0.3,
		friction : 0,
		density : 1.2
	}
	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
	
	wall = Bodies.rectangle(500,650,26,100,wall_options);
	World.add(world,wall);

	wall2 = Bodies.rectangle(650,650,26,100,wall_options);
	World.add(world,wall2);

	ground = Bodies.rectangle(350,685,900,26,ground_options)
	World.add(world,ground);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	rectMode(CENTER);
	background(0);

	Engine.update(engine);

	push();
	ellipse(ball.position.x,ball.position.y,20);
	pop();
	rect(ground.position.x,ground.position.y,900,26);
	rect(wall.position.x,wall.position.y,26,100);
	rect(wall2.position.x,wall2.position.y,26,100);

	if(keyDown("space")){
		ball.velocityY = 4
		ball.VelocityX = 4
	}
	ball.velocityY = ball.VelocityY + 0.5
	ball.velocityX = ball.VelocityX + 0.5
}


		

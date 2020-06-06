var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ball,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	var canvas=createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//ball
	ball = new Ball(100,200);
	
	//ground
	ground = new Ground(width/2, 650, 800, 10 );

	//box
	box1 = new Box(650,650,200,15);
    box2 = new Box(557,610,15,100);
	box3 = new Box(743,610,15,100);

	Engine.run(engine);
}


function draw() {

	background(0);

	Engine.update(engine);
	
	ground.display();
	box1.display();
	box2.display();
	box3.display();
	ball.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:0.9,y:-0.9});
	}
}

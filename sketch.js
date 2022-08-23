const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var ball2;

var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg('right.png');
  btn1.position(30,30);
  btn1.size(50,50);
  btn1.mouseClicked(hforce);

  btn2 = createImg('up.png');
  btn2.position(320, 30);
  btn2.size(50,50);
  btn2.mouseClicked(vforce);

  btn3 = createImg('push.png');
  btn3.position(180,30);
  btn3.size(50,50);
  btn3.mouseClicked(force);


  ball = Bodies.circle(200,100,20)
  World.add(world,ball);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse (ball.position.x,ball.position.y,20,20 )
}


function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0});
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03})
}

function force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:-0.05})
}
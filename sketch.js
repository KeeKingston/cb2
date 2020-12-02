const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

var ball;
var ground1;
var b1

function setup(){
     createCanvas(1200,400,200,213);
    engine = Engine.create();
    world = engine.world;

   
   b1=new B(850,400);
    ball= new Ball(200,300,30);
    ground1=new Ground(600,400,1200,20)
}

function draw(){
    background(225);
    Engine.update(engine);
  
    ball.display();
    ground1.display();
    b1.display();
   
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

    roof1 = new roof (370,300,200,20)
    bob2 = new bob(400,500,15);
	  bob1 = new bob(370,500,15);
  	bob3 = new bob(340,500,15);
	  bob4 = new bob(310,500,15);
	  bob5 = new bob(430,500,15);
    
    rope1 = new rope(bob1.body,roof1.body,0,0);
    rope2 = new rope(bob2.body,roof1.body,+30,0);
    rope3 = new rope(bob3.body,roof1.body,-30,0);
    rope4 = new rope(bob4.body,roof1.body,-60,0);
    rope5 = new rope(bob5.body,roof1.body,60,0);
  	Engine.run(engine);
  
}

function draw() {
  background("white");
  Engine.update(engine); 
  //rectMode(CENTER);
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function keyPressed()
 { if (keyCode === UP_ARROW)
   {
      Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-50,y:-50}); 
   } 

  }
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;
    
    var ground_option={
        isStatic : true
    }
    ground=Bodies.rectangle(200,390,400,20,ground_option)
    World.add(world,ground)

    var ball_option={
        restitution : 1.5
    }
    ball=Bodies.circle(200,200,20,ball_option)
    World.add(world,ball)

    var ball2_option={

        restitution : 1.5
    }
    ball2=Bodies.circle(300,300,20,ball2_option)
    World.add(world,ball2)
}

function draw(){
    background(0);
   Engine.update(engine)
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20)
    
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)
    ellipse(ball2.position.x,ball2.position.y,20,20)
}

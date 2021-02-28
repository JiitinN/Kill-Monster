const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;


function preload(){
    backgroundImg = loadImage("images/GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1500, 725);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(0, 600, 1500, 25);

    hero = new Hero(200, 200, 90);

    rope = new Fly(hero.body, {x:300, y:50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    hero.display();

    ground.display();

}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}
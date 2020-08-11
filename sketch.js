const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 335, 300, 120);

    box1 = new Box(700,320,40,40);
    box2 = new Box(750,320,40,40);
    box3 = new Box(800,320,40,40);
    box4 = new Box(850,320,40,40);
    box5 = new Box(900,320,40,40);
    box6 = new Box(950,320,40,40);
    box7 = new Box(1000,320,40,40);
    box8 = new Box(1050,320,40,40);

    fbox1 = new Box(725,280,40,40);
    bfox2 = new Box(775,280,40,40);
    bofx3 = new Box(825,280,40,40);
    boxf4 = new Box(875,280,40,40);
    fbox5 = new Box(925,280,40,40);
    bfox6 = new Box(975,280,40,40);
    bofx7 = new Box(1025,280,40,40);

    box21 = new Box(750,240,40,40);
    box31 = new Box(800,240,40,40);
    box41 = new Box(850,240,40,40);
    box51 = new Box(900,240,40,40);
    box61 = new Box(950,240,40,40);
    box71 = new Box(1000,240,40,40);

    bfox21 = new Box(775,200,40,40);
    bofx31 = new Box(825,200,40,40);
    boxf41 = new Box(875,200,40,40);
    fbox51 = new Box(925,200,40,40);
    bfox61 = new Box(975,200,40,40);

    box312 = new Box(800,160,40,40);
    box412 = new Box(850,160,40,40);
    box512 = new Box(900,160,40,40);
    box612 = new Box(950,160,40,40);

    bofx312 = new Box(825,120,40,40);
    boxf412 = new Box(875,120,40,40);
    fbox512 = new Box(925,120,40,40);

    box4123 = new Box(850,80,40,40);
    box5123 = new Box(900,80,40,40);

    boxf4123 = new Box(875,40,40,40);

    hex = new Hex(200,200);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hex.body,{x:200, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    fbox1.display();
    bfox2.display();
    bofx3.display();
    boxf4.display();
    fbox5.display();
    bfox6.display();
    bofx7.display();
    box21.display();
    box31.display();
    box41.display();
    box51.display();
    box61.display();
    box71.display();
    bfox21.display();
    bofx31.display();
    boxf41.display();
    fbox51.display();
    bfox61.display();
    box312.display();
    box412.display();
    box512.display();
    box612.display();
    bofx312.display();
    boxf412.display();
    fbox512.display();
    box4123.display();
    box5123.display();
    boxf4123.display();

    hex.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        Matter.Body.setPosition(hex.body, {x: 200 , y: 200});
        slingshot.attach(hex.body);
    }
}
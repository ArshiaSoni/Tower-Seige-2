const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 550, 1000, 20);
  stand1 = new Ground(550, 300, 220, 20);

  box1 = new Box(470, 275, 30, 30);
  box2 = new Box(500, 275, 30, 30);
  box3 = new Box(530, 275, 30, 30);
  box4 = new Box(560, 275, 30, 30);  
  box5 = new Box(590, 275, 30, 30);
  box6 = new Box(620, 275, 30, 30);

  box7 = new Box (485, 245, 30, 30);
  box8 = new Box (515, 245, 30, 30);
  box9 = new Box (545, 245, 30, 30);
  box10= new Box (575, 245, 30, 30);
  box11= new Box (605, 245, 30, 30);

  box12= new Box (500, 215, 30, 30);
  box13= new Box (530, 215, 30, 30);
  box14= new Box (560, 215, 30, 30);
  box15= new Box (590, 215, 30, 30);

  box16= new Box(515, 185, 30, 30);
  box17= new Box(545, 185, 30, 30);
  box18= new Box(575, 185, 30, 30);

  box19= new Box(530, 155, 30, 30);
  box20= new Box(560, 155, 30, 30);

  box21= new Box(545, 125, 30, 30);

  ball = new Ball();
  sling = new SlingShot( {x: 250, y: 250}, ball.body);

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  stand1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();

  ball.display();
  sling.display();

}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if (keyCode === 32){
    sling.attach(ball.body);  
  }
}

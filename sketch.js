const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

score = 0; 

var engine, world;

var ground1, stand1, stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20;
var slingshot;
var poly;
var bgColor = "blue";


function preload(){
poly = loadImage("ball.png");
}

function setup() {
  var canvas= createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,390,800,10);
  stand1 = new Ground(550,320,200,5);
  stand2 = new Ground(700,180,200,5);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  box1 = new Box(550,320,30,30);
  box2= new Box(570,320,30,30);
  box3= new Box(600,320,30,30);
  box4= new Box(630,320,30,30);

  box5= new Box(495,290,30,30);
  box6= new Box(545,290,30,30);
  box7= new Box(595,290,30,30);

  box8= new Box(520,220,30,30);
  box9= new Box(570,220,30,30);

  box10= new Box(542,190,30,30);
  
  
  box11= new Box(620,160,30,30);
  box12= new Box(670,160,30,30);
  box13= new Box(720,160,30,30);
  box14= new Box(770,160,30,30);

  box15= new Box(645,130,30,30);
  box16= new Box(695,130,30,30);
  box17= new Box(745,130,30,30);

  box18= new Box(670,100,30,30);
  box19= new Box(720,100,30,30);

  box20= new Box(695,70,30,30);

 

  
	

  slingshot = new SlingShot(polygon.body,{x:100, y:200});


}


function draw() {
  background(bgColor);
  text ("Score: "+score,750,40);
   Engine.update(engine);
  ground1.display();
  stand1.display();
  stand2.display();
 
  
  box1.display();
  box1.score();

  box2.display();
  box2.score();

  box3.display();
  box3.score();

  box4.display();
  box4.score();

  box5.display();
  box5.score();

  box6.display();
  box6.score();

  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();

  imageMode (CENTER);
  image(poly,polygon.position.x, polygon.position.y,40,40);



 
 slingshot.display();





  
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed (){
  if(keyCode===32){
      slingshot.attach(polygon.body);
  }
}
async function getBackground(){
  var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responceJSON = await responce.json();
  console.log(responceJSON);
  var datetime = responceJSON.datetime;
  console.log(datetime);
  var hout = datetime.slice(11,13);
  console.loh(hour);

  if(hour >=6 && hour <= 18){
    byColor = "white";
  }
  else{
    bgColor = "gray";
  }


}
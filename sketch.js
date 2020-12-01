const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2,ground

function setup() {
  var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    ground = new Ground(450,380,900,20);
    block1 = new Box(300,275,30,40);
     console.log(block1);
      block2 = new Box(330,275,30,40);
       block3 = new Box(360,275,30,40);
        block4 = new Box(390,275,30,40);
         block5 = new Box(420,275,30,40);
          block6 = new Box(450,275,30,40); 
    block7 = new Box(480,275,30,40);
    //level two 
    block8 = new Box(330,235,30,40);
     block9 = new Box(360,235,30,40);
      block10 = new Box(390,235,30,40);
       block11 = new Box(420,235,30,40);
        block12 = new Box(450,235,30,40); //level three
         block13 = new Box(360,195,30,40);
          block14 = new Box(390,195,30,40);
           block15 = new Box(420,195,30,40);  
    block16 = new Box(390,155,30,40);
    //set 2 for second stand //level one 
    blocks1 = new Box(640,175,30,40);
     blocks2 = new Box(670,175,30,40);
      blocks3 = new Box(700,175,30,40);
       blocks4 = new Box(730,175,30,40);
        blocks5 = new Box(760,175,30,40); //level two 
        blocks6 = new Box(670,135,30,40);
         blocks7 = new Box(700,135,30,40);
          blocks8 = new Box(730,135,30,40); //top 
    blocks9 = new Box(700,95,30,40);

    ball = Bodies.circle(50,200,40);
     World.add(world,ball)
     chain1 = new Chain(ball,{x:100,y:200});
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("blue");
  Engine.update(engine);
stand1.display();
stand2.display();
ground.display();
fill("pink");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("green");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
fill("yellow");
block16.display();
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
blocks6.display();
blocks7.display();

ellipse(ball.position.x,ball.position.y,40,40)  
 chain1.display();
 drawSprites();
}
function mouseDragged(){
   Matter.Body.setPosition(ball,{x:mouseX,y:mouseY}); 
  }
   function mouseReleased(){
      chain1.fly(); }
      function keyPressed(){
         if(keyCode === 32){
            chain1.attach(this.ball); 
          }
         }

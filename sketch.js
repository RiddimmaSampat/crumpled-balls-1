
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  boxPosition=(width/2-100);
  boxY=610;


  boxleftSprite=new bin(boxPosition, boxY, 20,100);
  boxleftSprite.shapeColor=color(255,0,0);

  boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
  World.add(world, boxLeftBody);

  boxBase=new bin(boxPosition+100, boxY+40, 200,20);
  boxBase.shapeColor=color(255,0,0);

  boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
  World.add(world, boxBottomBody);

  boxleftSprite=new bin(boxPosition+200 , boxY, 20,100);
  boxleftSprite.shapeColor=color(255,0,0);

  boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
  World.add(world, boxRightBody);

    paper1= new paper(100,610,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();

  box

  drawSprites();
 
}




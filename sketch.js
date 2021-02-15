  const Engine = Matter.Engine;
  const Bodies = Matter.Bodies;
  const World = Matter.World;
  const Constraint = Matter.Constraint;

  var myEngine, myWorld;
  var ground;
  var ball;
  var box1,box2,box3,box4;
  var box5,box6,box7,box8;
  var box9,box10,box11,box12;
  var box13,box14,box15,box16;

  function setup(){
   createCanvas(3000,800);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(900,600,1200,20);

    ball = new Ball(900,200,80,80);

    box1 = new Box(1300,100,50,50)
    box2 = new Box(1300,150,50,50)
    box3 = new Box(1300,200,50,50)
    box4 = new Box(1300,250,50,50)
    box5 = new Box(1350,100,50,50)
    box6 = new Box(1350,150,50,50)
    box7 = new Box(1350,200,50,50);
    box8 = new Box(1350,250,50,50);
    box9 = new Box(1300,300,50,50)
    box10 = new Box(1300,350,50,50);
    box11 = new Box(1300,400,50,50);
    box12 = new Box(1300,450,50,50);
    box13 = new Box(1350,300,50,50);

    rope = new Rope(ball.body,{x:900, y:100})


  }

  function draw(){
      background(0,0,0);

      Engine.update(myEngine);


      ground.display();
      ball.display();
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

      rope.display();


  }


  function mouseDragged(){
      Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }

var Engine=Matter.Engine,
    World=Matter.World,
    Events=Matter.Events,
    Bodies=Matter.Bodies;

var engine;
var world;
var p;
var particles=[];
var plinkos=[];
var row=11;
var col=10;


var bounds=[];

var ding;

function preload(){
  ding=loadSound('ding.mp3');
}

function mousePressed(){
  //ding.play();
}

function setup(){
  createCanvas(600,800);

  colorMode(HSB);
  engine=Engine.create();
  world=engine.world;

  newParticle();

  var space=width/col;
  for(var i=0;i<row;i++){
    for(var j=0;j<col;j++){
      var x=i*space;
      if(j%2==0){
        x+=space/2;
      }
      var y=space+j*space;
      var p=new Plinko(x,y,15);
      plinkos.push(p);
    }
  }

  var b=new Boundary(width/2,height+50,width,100);
  bounds.push(b);

  for (var i = 0; i < col+2; i++) {
    var x=i*space;
    var h=100;
    var w=10;
    var y=height-h/2;
    var b=new Boundary(x,y,w,h);
    bounds.push(b);
  }

  function collision(event){
    //console.log(event);

    var pairs=event.pairs;
    for (var i = 0; i < pairs.length; i++) {
      var labelA=pairs[i].bodyA.label;
      var labelB=pairs[i].bodyB.label;

      if((labelA=='plinko'&& labelB=='particle')||(labelA=='particle'&& labelB=='plinko')){
      //  ding.play();
      console.log('collision:'+ labelA+','+labelB);
      }
    }
  }

  Events.on(engine,'collisionStart',collision);

  Engine.run(engine);
}


function draw(){
  //console.log(frameCount);
  //Engine.update(engine,1);
  background(0,0,0);
  if(frameCount%20==0){
    newParticle();
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
    if(particles[i].offScreen()){
      World.remove(world,particles[i].body);
      particles.splice(i,1);
      i--;
    }

  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
  }

  for (var i = 0; i < bounds.length; i++) {
    bounds[i].show();
  }


}


function newParticle(){
  p=new Particle(250,0,10);
  particles.push(p);
}

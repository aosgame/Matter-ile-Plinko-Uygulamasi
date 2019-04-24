

function Particle(x,y,r){
  var options={
    restitution:0.3,
    friction:0.2
  }
  x+=random(-200,200);
  this.body=Bodies.circle(x,y,r,options);
  this.body.label="particle";
  this.r=r;
  this.hue=random(360);
  World.add(world,this.body);


}

Particle.prototype.offScreen=function(){
  var x=this.body.position.x;
  var y=this.body.position.y;

  if(x<-50||x>width+50||y>height+50){
    return true;
  }
}

Particle.prototype.show=function(){
    push();
    fill(this.hue,255,255);
    stroke(255);
    noStroke();
    var pos=this.body.position;
    translate(pos.x,pos.y);
    ellipse(0,0,this.r*2);
    pop();
}

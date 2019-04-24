

function Plinko(x,y,r){
  var options={
    isStatic:true
  }
  this.body=Bodies.circle(x,y,r,options);
  this.body.label="plinko";
  this.r=r;
  World.add(world,this.body);

}

Plinko.prototype.show=function(){
    push();
    fill(106,176,76);
    stroke(255);
    var pos=this.body.position;
    translate(pos.x,pos.y);
    ellipse(0,0,this.r*2);
    pop();
}

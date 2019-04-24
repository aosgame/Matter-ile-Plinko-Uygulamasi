

function Boundary(x,y,w,h){
  var options={
      isStatic:true
  }
  this.body=Bodies.rectangle(x,y,w,h,options);
  this.body.label="boundary";
  this.w=w;
  this.h=h;
  World.add(world,this.body);


}

Boundary.prototype.show=function(){
    push();
    fill(183,21,64);
    stroke(255);
    noStroke();
    var pos=this.body.position;
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
}

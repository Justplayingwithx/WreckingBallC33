class Box{
    constructor(x,y,width,height){
    var options = {
       restitution:0.8,
       friction:1,
       density:0.04
    }
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;

    World.add(myWorld,this.body);
}

display(){
    
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    stroke("green");
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();
}
}
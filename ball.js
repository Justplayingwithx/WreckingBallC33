class Ball{
    constructor(x,y,width,height,angle){
          var options ={
              density:1,
              frictionAir:0.005

          }

          this.body = Bodies.rectangle(x,y,width,height,options);

          this.width = width;
          this.height = height;

          World.add(myWorld, this.body)



    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipse(0,0,this.width, this.height);
        pop();
    }
}
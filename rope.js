class Rope{
    constructor(myBodyA,myPointB){
        var options = {
            bodyA:myBodyA,
            pointB:myPointB,
            stiffness:0.8,
            length:450    
        }
        this.pointB = myPointB;
        this.rope = Constraint.create(options);

        World.add(myWorld,this.rope)

    }
    display(){
        if(this.rope.bodyA){
            push();
            stroke("white")
            strokeWeight(4)
            line(this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y);
            pop();
            
        }
    }
}
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);

    }

    fly(){
        this.body.bodyA = null;
    }

    display(){
       
       if(this.body.bodyA){
           
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            
            push();
            stroke(48,23,8);

            if(pointA.x<100){
            strokeWeight(7);
           stroke("black");
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
           
            }
            else {
                strokeWeight(3);
                stroke("black");
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
                
                }
            pop();
        }
    }
    
}
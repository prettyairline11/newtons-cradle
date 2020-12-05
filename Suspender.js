class Suspender{
    constructor(body1,body2,setX,setY){
        this.setX=setX
        this.setY=setY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.setX,y:this.setY}
       
        }
        this.Suspender = Constraint.create(options);
        World.add(world, this.Suspender);
        }
        display(){
            var pointA= this.Suspender.bodyA.position;
            var pointB= this.Suspender.bodyB.position;

            //stroke(0);
            strokeWeight (2)
            stroke("red")
            
         
            var Pos1X = pointA.x
            var Pos1Y = pointA.y
            
            var Pos2X = pointB.x+this.setX
            var Pos2Y = pointB.y+this.setY
            line (Pos1X,Pos1Y,Pos2X,Pos2Y);
        }
        
}

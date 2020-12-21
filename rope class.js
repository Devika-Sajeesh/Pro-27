class Rope{
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;


        var options = {
            //restitutions:0.1,
            bodyA: body1, 
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);


    }
    display(){
        var pointA=this.Rope.bodyA.position;
		var pointb=this.Rope.bodyB.position;


		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointb.x+this.offsetX
        var Anchor2Y=pointb.y+this.offsetY
        
        stroke("black");
		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);;

    }
}
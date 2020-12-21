class Bob{
    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitutions:0.5,
            friction:0.3,
            density:1
        }

        this.x=x;
		this.y=y;
		this.r=r;
		this.body= Bodies.circle(this.x,this.y,(this.r)/2,options)
		World.add(world, this.body);

    }
    display(){
        var paperpos = this.body.position;
       // paperpos = this.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        fill(rgb(3, 132, 117));
        stroke(rgb(3, 132, 117));
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
class rope{
    constructor(bobbody,roofbody,offsetX){
        this.offsetX =offsetX;
        var options={
       bodyA : bobbody,
       bodyB : roofbody,
       pointB:{x:this.offsetX,y:0}
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope) 
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}



/*class Rope{
    constructor(bobbody, roofbody,xOffsetX){
        var options = {
            bodyA: bobbody,
			bodyB: roofbody,
			pointB:{x:xOffsetX,y:0}
             
        }
        //this.pointB = pointB;
		this.rope = Constraint.create(options);
		this.xOffsetX = xOffsetX;
        World.add(world, this.rope);
    }

   
    display(){
         
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
    
        line(pointA.x, pointA.y, pointB.x+this.xOffsetX, pointB.y);
         
    }
    
} */

 





class Rope{
    constructor(bobbody, roofbody,xOffsetX){
        var options = {
            bodyA: bobbody,
			bodyB: roofbody,
			pointB:{x:xOffsetX,y:0}
             
        }
        //this.pointB = pointB;
		this.rope = Constraint.create(options);
		this.xOffsetX = xOffsetX;
        World.add(world, this.rope);
    }

   
    display(){
         
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
    
        line(pointA.x, pointA.y, pointB.x+this.xOffsetX, pointB.y);
         
    }
    
} 

 
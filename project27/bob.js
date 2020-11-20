class bob
{
 constructor (x,y)
 {
  
 var options={
    restitution : 1,
    friction : 0.3,
    density : 1,
 }
 
 this.body = Bodies.circle(x,y,25,options)
 World.add(world,this.body);
 
 }

 display()
 {
    var pos = this.body.position;
   fill("purple")
   ellipse(pos.x,pos.y,50,50); 
 }
};
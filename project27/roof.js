class roof{
    constructor()
    {
      var options={
        isStatic:true
      }
         this.body = Bodies.rectangle(400,100,300,10,options);
         World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill(128,128,128);
      rect(pos.x,pos.y,300,10); 
}
}
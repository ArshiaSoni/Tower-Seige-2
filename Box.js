class Box{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        if(this.body.speed < 3){
          push ();
          translate(pos.x,pos.y);
          rotate (angle);
          rectMode(CENTER);
          fill("lightblue");
          rect(0, 0, this.width, this.height);
          pop();
        }

        else{
          push ();
          World .remove(world, this.body);
          this.visibility = this.visibility - 5
          tint (255,this.visibility);
          pop ();
        }
        
   }
}

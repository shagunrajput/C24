class Pig  {
    constructor(x,y){
        var box_option = {
            restitution: 0.8,
            friction: 0.5,
            density: 1.0
          }
        this.body =Bodies.rectangle(x,y,50,50,box_option);
        World.add(myWorld,this.body);  
        this.width=50;
        this.height=50;     
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
         push ();
         angleMode(RADIANS);
         translate (pos.x,pos.y);
         rotate (angle);
        rectMode(CENTER); 
        fill ("green");
        rect (0,0,this.width,this.height);
        pop ();
    }
}
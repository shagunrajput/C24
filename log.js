class Log {
    constructor(x,y,h,angle){
        var log_option = {
            restitution: 0.5,
            friction: 1,
            density: 1.0
          }
        this.body =Bodies.rectangle(x,y,20,h,log_option);
        World.add(myWorld,this.body);  
        Matter.Body.setAngle(this.body,angle);
        this.width=20;
        this.height=h;     
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
         push ();
         angleMode(RADIANS);
         translate (pos.x,pos.y);
         rotate (angle);
        rectMode(CENTER);
        strokeWeight (4);
        stroke ("red") 
        fill ("blue");
        rect (0,0,this.width,this.height);
        pop ();
    }
}
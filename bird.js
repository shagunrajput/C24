class Bird  {
    constructor(x,y){
        var bird_option = {
            restitution: 0.8,
            friction: 0.5,
            density: 1.0
          }
        this.body =Bodies.rectangle(x,y,50,50,bird_option);
        World.add(myWorld,this.body);  
        this.width=50;
        this.height=50;     
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
         push ();
         angleMode(RADIANS);
         translate (pos.x,pos.y);
         rotate (angle);
        rectMode(CENTER);
        strokeWeight(5); 
        stroke ("blue");
        fill ("orange");
        rect (0,0,this.width,this.height);
        pop ();
    }
}
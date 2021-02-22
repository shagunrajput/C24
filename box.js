class Box {
    constructor(x,y,w,h){
        var box_option = {
            restitution: 1,
            friction: 1,
            density: 1.0
          }
        this.body =Bodies.rectangle(x,y,w,h,box_option);
        World.add(myWorld,this.body);  
        this.width=w;
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
        fill ("yellow");
        rect (0,0,this.width,this.height);
        pop ();
    }
}
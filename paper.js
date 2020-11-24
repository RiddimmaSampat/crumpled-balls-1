class paper{
    constructor(x,y,r){
        var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
        this.body=Matter.Bodies.circle(x,y,radius);
       this.r=radius
    }

    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill('pink');
        ellipse(pos.x,pos.y,r);
    }
};
class bob {

    constructor (x,y,r){
    
        var options = {
            isStatic : false,
            restitution:0.3,
            friction : 0.5,
            density : 1.2,
        }
    
    
    
    
    
    this.body = Bodies.circle(x,y,r/2,options)
    this.r = r
    World.add(world, this.body);
    }
    
    display (){
    
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        ellipse(0, 0, this.r, this.r);
        pop();
    
    };
    
    }
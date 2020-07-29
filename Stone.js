class Stone {

    constructor(x,y,width,height){
        var options={
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':12
        }
        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        this.image = loadImage("Images/stone.png");
        World.add(world,this.body);
       
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
    }
}
class Boy {

    constructor(x,y){
        var options={
            isStatic:true
        }
        this.w=width;
        this.h=height;
        
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        this.image = loadImage("Images/boy.png");
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,400,400);
    }
}
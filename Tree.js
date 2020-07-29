class Tree {

    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.w =width;
        this.h = height;
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        this.image = loadImage("Images/tree.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
         image(this.image,1500,1400);
    }
}
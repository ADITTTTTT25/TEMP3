class Mango{

    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.w=width;
        this.h=height;
        this.body=Bodies.rectangle(x,y,this.w,this.h,options)
        this.image = loadImage("Images/mango.png");
    }
    display(){
         var pos=this.body.position;
         imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
    }
}
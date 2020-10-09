
  class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.4,
            'friction':1.2,
            'density':1.0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          this.body.display();
        }
        else{
          this.Visibility -=5;
            push();
          this.tint(255,this.Visibility);
          image (this.image,this.body.position.x, this.body.position.y,50,50);
          pop();
        }

       /* var angle = this.body.angle;
        push();
        translte(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        */
      }
      score(){
        if(this.visibitlity<0 && this.visibility>=105){
          score ++;
        }
      }
}  
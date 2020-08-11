class Box extends BaseClass {
  constructor(x, y){
    super(x,y,40,40);
    this.image = loadImage("square.png");
    this.Visibility = 0;
  }
  display() {
    if(this.body.speed<9) {
      super.display();
    }else {
      World.remove(world, this.body);
      push();
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,40,40);
      pop();
    }
  }

};

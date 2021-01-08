/*
1. change the class name --> include 'extends Baseclass'
2. keep the constructor & image
3. replace 'this.body = Bodies.rectangle' with super
4. remove 'options'
*/



class Bird extends Baseclass {
    constructor(x, y) {
       super(x, y, 50, 50);
       this.image= loadImage("sprites/bird.png")
      
    };

    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  };
  
/*
1. change the class name --> include 'extends Baseclass'
2. keep the constructor & image
3. replace 'this.body = Bodies.rectangle' with super
4. remove 'options'
*/

class Log extends Baseclass {
    constructor(x, y, height, angle) {
     
      
      super(x, y, 20, height, );
      this.image = loadImage("sprites/wood2.png")
    
      Matter.Body.setAngle(this.body, angle);
     
    }
  };
  
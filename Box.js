/*
1. change the class name --> include 'extends Baseclass'
2. keep the constructor & image
3. replace 'this.body = Bodies.rectangle' with super
4. remove 'options'
*/

class Box  extends Baseclass {
  constructor(x, y, width, height) {
    
    
    super(x, y, width, height, );
    this.image = loadImage("sprites/wood1.png")
   
  }
};

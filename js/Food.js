// Food
//
// A class to represent food, mostly just involves the ability to be
// a random size and to reset

class Food extends Agent {

  // Constructor
  //
  // Pass arguments on to the super() constructor (e.g. for Agent)
  // Also set a minimum and maximum size for this food object which it
  // will vary between when it resets
  constructor(x,y,minSize,maxSize,vx,vy,maxSpeed, timer, color) {
    super(x,y,random(minSize,maxSize),color);
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.vx = vx;
    this.vy = vy;
    this.maxSpeed = maxSpeed;
    this.timer = timer;
  }

  // reset()
  //
  // Set position to a random location on the canvas
  // Set the size to a random size within the limits
  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
  }

  update(){
  this.velocity();
  // moves the food
  this.x += this.vx;
  this.y += this.vy;
  // makes the food stay in place
  if (this.x < 0) {
      this.x += width;
  }
    else if (this.x > width) {
      this.x -= width;
    }
  if (this.y < 0) {
    this.y += height;
  }
    else if (this.y > height) {
      this.y -= height;
    }
  }

  velocity() {
    this.timer += 1;
    if (this.timer >= 20){
      this.vx = random(-this.maxSpeed, this.maxSpeed);
      this.vy = random(-this.maxSpeed, this.maxSpeed);
      this.timer=0;
    }
  }
}

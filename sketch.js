let shapes = [];
let numShapes = 30;

function setup() {
  createCanvas(800, 600);
  noStroke();
  
  // Initialize shapes
  for (let i = 0; i < numShapes; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 50);
    let shapeType = random() > 0.5 ? 'square' : 'circle';
    let velocity = createVector(random(-1, 1), random(-1, 1)).mult(random(1, 3));
    shapes.push(new Shape(x, y, size, shapeType, velocity));
  }
}

function draw() {
  background(240);
  
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].update();
    shapes[i].display();
  }
}

class Shape {
  constructor(x, y, size, type, velocity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.type = type; // 'square' or 'circle'
    this.velocity = velocity;
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    
    if (this.x < -this.size || this.x > width + this.size || this.y < -this.size || this.y > height + this.size) {
      this.x = random(width);
      this.y = random(height);
    }
  }

  display() {
    fill(0, 100);
    if (this.type === 'square') {
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    } else if (this.type === 'circle') {
      ellipse(this.x, this.y, this.size, this.size);
    }
  }
}

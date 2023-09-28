class Circle {
  constructor(radius = 1.0, color = "Red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Radius: ${this.radius} Color: ${this.color}`;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

let c1 = new Circle(); // Constructor with no params
console.log("Constructor with no params: " + c1.toString());

let c2 = new Circle(3.5); // Constructor with one param
console.log("Constructor with one param: " + c2.toString());

let c3 = new Circle(2.2, 'Yellow'); // Constructor with all the params
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());

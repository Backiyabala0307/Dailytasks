
class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    circle() {
        console.log("This is a circle");
    }

    circle(radius) {
        console.log(`This is a cicle with radius:${this.radius}`);
    }

    circle(radius, color) {
        console.log(`This is the circle with radius:${this.radius} and color:${this.color}`);
    }

    getradius() {
        return this.radius;
    }

    setradius(radius) {
        this.radius = radius;
    }

    getcolor() {
        return this.color;
    }

    setcolor(color) {
        this.color = color;
    }

    tostring() {
        return `circle[radius=${this.radius},color=${this.color}]`;
    }

    getarea() {
        return 3.14 * (this.radius ** 2);
    }

    getcircumference() {
        return 2 * 3.14 * (this.radius);
    }

}

let circle1 = new Circle(4, "blue");
//console.log(circle1.circle());
console.log(circle1.getradius());
//console.log(circle1.setradius());
console.log(circle1.getcolor());
//console.log(circle1.setcolor());
console.log(circle1.tostring());
console.log(circle1.getarea());
console.log(circle1.getcircumference());
//Creates constructor Shape
class Shape{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Triangle extends Shape{
    constructor(){
        super(width, height);
        this.coordinates = coordinates;
    }
}

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

module.exports = Shape;
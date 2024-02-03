class SVG{
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
        if(this.textEl.length >3) {
            throw new Error("Text must not exceed 3 characters.");
        }
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }

    setText(message, color) {
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }

    setShape(shape) {
        this.shapeEl = shape.render()
    }


}

module.exports = SVG;
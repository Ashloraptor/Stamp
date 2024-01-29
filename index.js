
function Stamp(text, color, shape) {
    this.text = text; //these are called arguments
    this.color = color;
    this.shape = shape;

    //placeholder function/method for generating the svg
    // this.printMetaData = function() {
    //     console.log(`${this.text}`);
    // }
}

//Can use prototype instead of method
// Stamp.prototype.method = function () {
//     console.log(`${this.text}`);
// }

const stamp = new Stamp();

// stamp.printMetaData();
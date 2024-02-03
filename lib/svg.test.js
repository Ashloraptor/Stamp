const { test } = require('node:test');
const Shape = require('./shapes');



//Test SVG
const SVG = require("./svg");
const { Square } = require("./shapes");
test("should render a 300 x 200 svg element", () => {
    const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvg);
});
test("should append text element", () => {
    const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
    const svg = new SVG();
    svg.setText("A", "white");
    expect(svg.render()).toEqual(expectedSvg);
});
test("should set text message and color", () => {
    const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "white");
    expect(svg.render()).toEqual(expectedSvg);
});

//This is redundant, as inquirer catches bad input first.
// test("should throw if text exceeds 3 characters", () => {
//     const expectedError = new Error("Text must not exceed 3 characters.");
//     const svg = new SVG();
//     expect(() => svg.setText("HELLO", "white")).toThrow(expectedError);
// });

test("should include a shape", () => {
    const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "white");
    const square = new Square();
    square.setColor("blue");
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
});
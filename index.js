const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
//Exmple has 
//const { createDocument } = require('./document');
//not sure if this adaptation is functional
const { createSVG } = require('./svg');

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

run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'brand',
          message: 'Please provide up to 3 characters for your logo:',
          //Need a catch for if user enters more than 3 (or less than one?)
        },
        {
            type: 'list',
            name: 'text-color',
            message: 'What color text would you like?',
            choices: ['red', 'green', 'blue', 'white', 'black'],
            //Do I need to create values for the color names, or will it successfully call on the baked-in values?
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to incorporate?',
            choices: ['circle', 'square', 'triangle'],
        }

    ]);
};

// stamp.printMetaData();
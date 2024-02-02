const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class Questions{
    run(){
        return inquirer.prompt(
            [
                {
                  type: 'input',
                  name: 'brand',
                  message: 'Please provide up to 3 characters for your logo:',
                  //Need a catch for if user enters more than 3 (or less than one?)
                },
                {
                    type: 'list',
                    name: 'textColor',
                    message: 'What color text would you like?',
                    choices: ['red', 'green', 'blue', 'white', 'black'],
                    //Do I need to create values for the color names, or will it successfully call on the baked-in values?
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'What shape would you like to incorporate?',
                    choices: ['circle', 'square', 'triangle'],
                },
                {
                    type: 'list',
                    name: 'shapeColor',
                    message: 'What color shape would you like?',
                    choices: ['red', 'green', 'blue', 'white', 'black'],
                },
        
            ]
        ).then (({brand, textColor, shape, shapeColor})=> {
            let shapeType;
            switch(shape){
                case "circle":
                shapeType = new Circle();
                break;

                case "square":
                shapeType = new Square();
                break;

                default:
                shapeType = new Triangle();
                break;
            }
            shapeType.setColor(shapeColor);
            const svg = new SVG();
            svg.setText(brand, textColor);
            svg.setShape(shapeType);
            return writeFile("logo.svg", svg.render());
        }
        
        ).then(() => {
            console.log('Thank you for using Stamp!')
        })
    }
}
module.exports = Questions
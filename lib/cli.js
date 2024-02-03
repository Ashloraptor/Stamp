const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const MaxLengthInput = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInput)

class Questions{
    run(){
        return inquirer.prompt(
            [
                {
                  type: 'maxlength-input',
                  //type: 'input',
                  name: 'brand',
                  message: 'Please provide up to 3 characters for your logo:',
                  maxLength: 3
                },
                {
                    type: 'list',
                    name: 'textColor',
                    message: 'What color text would you like?',
                    choices: ['red', 'green', 'blue', 'white', 'black'],
                    
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
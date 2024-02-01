const { describe } = require('node:test');
const Shape = require('./shapes');

describe('Shape', ()=>{
    describe('circle', () => {
        it('should be centered and rounded with no straight sides',() =>{
            const shape = new Shape();
            expect(shape.render()).toEqual(//this is the part that makes it round
            );
        });
    });
});

describe('Shape', ()=>{
    describe('triangle', () =>{
        it('should have three straight sides and be centered in the SVG', () =>{
            const shape = new Shape();
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182"/>')
        })
    })
})
describe('Shape', ()=>{
    describe('square', () =>{
        it('should have 4 straight equal sides and be centered in the SVG', () =>{
            const shape = new Shape();
            expect(shape.render()).toEqual('<polygon points="50,200 250,200 250,1 1,50/>')
        })
    })
})
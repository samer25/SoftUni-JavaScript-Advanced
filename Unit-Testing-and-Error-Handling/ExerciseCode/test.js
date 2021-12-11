const {expect} = require('chai')
const {isOddOrEven} = require('./Even-Or-Odd')


describe("Test oddOrEven", () => {
    it('Test invalid input', () => {
        expect(isOddOrEven(1)).to.be.undefined
        expect(isOddOrEven({})).to.be.undefined
        expect(isOddOrEven([])).to.be.undefined
    });
    it('Test if odd is returned', () => {
        expect(isOddOrEven('add')).to.be.equal('odd')
    });
    it('Test if even is returned', () => {
        expect(isOddOrEven('asfd')).to.be.equal('even')
        expect(isOddOrEven("")).to.be.equal('even')
    });
});

const {lookupChar} = require('./Char-Lookup')

describe("Test lookupChar", () => {

    it('should return undefined on lookupChar(2, 2)', () => {
        expect(lookupChar(2, 2)).to.equal(undefined);
    });

    it('should return undefined on lookupChar("test", "2")', () => {
        expect(lookupChar("test", "2")).to.equal(undefined);
    });

    it('should return undefined on lookupChar("test", 1.23)', () => {
        expect(lookupChar("test", 1.23)).to.equal(undefined);
    });

    it('should return Incorrect index on lookupChar("test", 25)', () => {
        expect(lookupChar("test", 25)).to.equal('Incorrect index');
    });

    it('should return Incorrect index on lookupChar("hello", -4)', () => {
        expect(lookupChar("hello", -4)).to.equal('Incorrect index');
    });

    it('should return Incorrect index on lookupChar("hello", 5)', () => {
        expect(lookupChar("hello", 5)).to.equal('Incorrect index');
    });

    it('should return "o" on lookupChar("hello", 4)', () => {
        expect(lookupChar("hello", 0)).to.equal('h');
    });

    it('should return "l" on lookupChar("hello", 3)', () => {
        expect(lookupChar("hello", 3)).to.equal('l');
    });

});

const {mathEnforcer} = require('./Math-Enforcer')

describe("Test mathEnforcer.addFive", () => {

    it('test addFive should return undefined if the input is not valid', function () {
        expect(mathEnforcer.addFive('5')).to.be.undefined
        expect(mathEnforcer.addFive([])).to.be.undefined
        expect(mathEnforcer.addFive({})).to.be.undefined
        expect(mathEnforcer.addFive(undefined)).to.be.undefined


    });
    it('test addFive should return added number', function () {
        expect(mathEnforcer.addFive(5)).to.be.equal(10)
        expect(mathEnforcer.addFive(1)).to.be.equal(6)
        expect(mathEnforcer.addFive(-5)).to.be.equal(0)
        expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.1)
        expect(mathEnforcer.addFive(-5.5)).to.be.closeTo(-0.5, 0.01)


    });



});

describe('Test mathEnforcer.subtractTen', ()=>{
    it('test subtractTen should return undefined if the input is not valid', function () {
        expect(mathEnforcer.subtractTen('5')).to.be.undefined
        expect(mathEnforcer.subtractTen([])).to.be.undefined
        expect(mathEnforcer.subtractTen({})).to.be.undefined
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined


    });

    it('test subtractTen should return added number', function () {
        expect(mathEnforcer.subtractTen(5)).to.be.closeTo(-5, 0.01)
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0)
        expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01)
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20)
        expect(mathEnforcer.subtractTen(-10.1)).to.be.closeTo(-20.1, 0.01)


    });
});

describe('Test mathEnforcer.sum', ()=>{
    it('test sum to numbers should return undefined if the input is not valid', function () {
        expect(mathEnforcer.sum('5', 5)).to.be.undefined
        expect(mathEnforcer.sum([], 5)).to.be.undefined
        expect(mathEnforcer.sum({}, 5)).to.be.undefined
        expect(mathEnforcer.sum(5, '5')).to.be.undefined
        expect(mathEnforcer.sum(5, [])).to.be.undefined
        expect(mathEnforcer.sum(5, {})).to.be.undefined
        expect(mathEnforcer.sum(undefined, 5)).to.be.undefined
        expect(mathEnforcer.sum(5, undefined)).to.be.undefined
        expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined


    });

    it('test sum to numbers should return added number', function () {
        expect(mathEnforcer.sum(5, 5)).to.be.equal(10)
        expect(mathEnforcer.sum(-5, 5)).to.be.equal(0)
        expect(mathEnforcer.sum(5, -5)).to.be.equal(0)
        expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10)
        expect(mathEnforcer.sum(10, 5)).to.be.equal(15)
        expect(mathEnforcer.sum(10.1, 0.1)).to.be.closeTo(10.2, 0.01)
        expect(mathEnforcer.sum(-10.1, -0.1)).to.be.closeTo(-10.2, 0.01)


    });
});
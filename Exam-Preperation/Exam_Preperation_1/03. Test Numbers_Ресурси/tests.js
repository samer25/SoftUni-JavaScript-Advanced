const testNumbers = require('./testNumbers')
const {expect} = require('chai')

describe("Test Numbers", function() {
    describe('sumNumbers', ()=>{
        it('should work with valid numbers', function () {
            expect(testNumbers.sumNumbers(3, 5)).to.be.equal('8.00')
            expect(testNumbers.sumNumbers(3, -1)).to.be.equal('2.00')
            expect(testNumbers.sumNumbers(-3, 1)).to.be.equal('-2.00')
            expect(testNumbers.sumNumbers(-1, -1)).to.be.equal('-2.00')
            expect(testNumbers.sumNumbers(3.3, 5)).to.be.equal('8.30')
            expect(testNumbers.sumNumbers(3, 5.3)).to.be.equal('8.30')
            expect(testNumbers.sumNumbers(3.3, 5.3)).to.be.equal('8.60')



        });
        it('should return undefined if passed invalid inputs', function () {
            expect(testNumbers.sumNumbers('2', '2')).to.be.equal(undefined)
            expect(testNumbers.sumNumbers('2', 2)).to.be.equal(undefined)
            expect(testNumbers.sumNumbers(2, '2')).to.be.equal(undefined)
            expect(testNumbers.sumNumbers(null, 2)).to.be.equal(undefined)
            expect(testNumbers.sumNumbers(2, null)).to.be.equal(undefined)
            expect(testNumbers.sumNumbers(null, null)).to.be.equal(undefined)
            expect(testNumbers.sumNumbers('', 2)).to.be.equal(undefined)
            expect(testNumbers.sumNumbers(2, '')).to.be.equal(undefined)
            expect(testNumbers.sumNumbers([], [])).to.be.equal(undefined)
            expect(testNumbers.sumNumbers({}, {})).to.be.equal(undefined)


        });
    });
    describe('numberChecker', ()=>{
        it('should return even if input is number and even', function () {
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!')
            expect(testNumbers.numberChecker(2.0)).to.be.equal('The number is even!')

            expect(testNumbers.numberChecker(-2)).to.be.equal('The number is even!')
            expect(testNumbers.numberChecker('2')).to.be.equal('The number is even!')
            expect(testNumbers.numberChecker('-2')).to.be.equal('The number is even!')

        });
        it('should return odd if input is number and odd', function () {
            expect(testNumbers.numberChecker(3)).to.be.equal('The number is odd!')
            expect(testNumbers.numberChecker(-3)).to.be.equal('The number is odd!')
            expect(testNumbers.numberChecker('3')).to.be.equal('The number is odd!')
            expect(testNumbers.numberChecker('-3')).to.be.equal('The number is odd!')
            expect(testNumbers.numberChecker(3.3)).to.be.equal('The number is odd!')


        });
        it('should throw error if input is not a number', function () {
            expect(() => testNumbers.numberChecker('a')).to.throw()

        });

    });
    describe('averageSumArray', ()=>{
        it('should return average sum', function () {
            expect(testNumbers.averageSumArray([5,2,5,2,6])).to.be.equal(4)
        });
    })
});
const companyAdministration = require('./companyAdministration')
const {expect} = require('chai')


describe("Test companyAdministration", function () {
    describe('hiringEmployee', () => {
        it('should throw error', function () {
            expect(() => companyAdministration.hiringEmployee('sammy', 'SomeJob', 19)).to.throws()
            expect(() => companyAdministration.hiringEmployee('sammy', 'SomeJob', 0)).to.throws()


        });
        it('should return string ', function () {
            expect(companyAdministration.hiringEmployee('sammy', 'Programmer', 3)).to.be.equal('sammy was successfully hired for the position Programmer.')
            expect(companyAdministration.hiringEmployee('sammy', 'Programmer', 100)).to.be.equal('sammy was successfully hired for the position Programmer.')
        });

        it('should return string ', function () {
            expect(companyAdministration.hiringEmployee('sammy', 'Programmer', 1)).to.be.equal('sammy is not approved for this position.')
            expect(companyAdministration.hiringEmployee('sammy', 'Programmer', 0)).to.be.equal('sammy is not approved for this position.')

        });

    });

    describe('calculateSalary', () => {
        it('should ', function () {
            expect(companyAdministration.calculateSalary(1)).to.be.equal(15)
            expect(companyAdministration.calculateSalary(100)).to.be.equal(1500)
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415)
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415)


        });

        it('should ', function () {
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415)
        });


        it('should ', function () {
            expect(() => companyAdministration.calculateSalary(-10)).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary('str')).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary(null)).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary('10')).to.throw('Invalid hours')

        });

    });

    describe('firedEmployee', () => {
        it('should ', function () {
            expect(companyAdministration.firedEmployee(['a', 'b', 'c' ], 0)).to.be.equal('b, c')
            expect(companyAdministration.firedEmployee(['a', 'b', 'c' ], 1)).to.be.equal( 'a, c')


        });


        it('should ', function () {
            expect(() => companyAdministration.firedEmployee(undefined, 1)).to.throws()
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throws()
            expect(() => companyAdministration.firedEmployee('1', 1)).to.throws()
            expect(() => companyAdministration.firedEmployee(3, 1)).to.throws()
            expect(() => companyAdministration.firedEmployee('str', 1)).to.throws()
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c' ], 10)).to.throws()
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c' ], 'str')).to.throws()
            expect(() => companyAdministration.firedEmployee('str', undefined)).to.throws()
            expect(() => companyAdministration.firedEmployee('str', {})).to.throws()
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c' ], '10')).to.throws()
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c' ], {})).to.throws()
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c' ], null)).to.throws()
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c' ], undefined)).to.throws()







        });
    });

});
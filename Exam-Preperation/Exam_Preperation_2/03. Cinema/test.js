const cinema = require('./cinema')
const {expect} = require('chai')

describe('Test Cinema', () => {
    describe('show Movie', () => {
        it('should return string when is there an empty input(array)', function () {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.')
        });
        it('should return an array of available movie separated by a comma and space', function () {
            expect(cinema.showMovies(['Spider man', 'Ironman', 'Superman'])).to.be.equal('Spider man, Ironman, Superman')

        });
    })

    describe('ticket Price', () => {
        it('should return price weather the submitted projectType', function () {
            const schedule = {
                "Premiere": 12.00,
                "Normal": 7.50,
                "Discount": 5.50
            }
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00)
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50)
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50)
        });
        it('should throw an error when pass invalid projectType', function () {
            expect(() => cinema.ticketPrice('First')).to.throw()
            expect(() => cinema.ticketPrice(5)).to.throw()


        });
    })

    describe('swap Seats in Hall', () => {
        it('should return string with Unsuccessful.. when one of the numbers do not exist', function () {
            expect(cinema.swapSeatsInHall(22, 1)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(3, 111)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(22, 31)).to.be.equal('Unsuccessful change of seats in the hall.')

        });
        it('should return string with Unsuccessful.. when the numbers are not integers', function () {
            expect(cinema.swapSeatsInHall('1', '5')).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(5, '1')).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall('1', 5)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall('str', 5)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall('str', 'str')).to.be.equal('Unsuccessful change of seats in the hall.')


        });
        it('should return string with Unsuccessful.. when one of the numbers is greater than the capacity of the hall 20', function () {
            expect(cinema.swapSeatsInHall(21, 1)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, 21)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(31, 21)).to.be.equal('Unsuccessful change of seats in the hall.')


        });
        it('should return string with Unsuccessful.. when one of the numbers is less or equal to 0', function () {
            expect(cinema.swapSeatsInHall(0, 1)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, 0)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(0, 0)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, -1)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(-1, 1)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(-1, -2)).to.be.equal('Unsuccessful change of seats in the hall.')

        });

        it('should return string with Unsuccessful.. when  the numbers are equal', function () {
            expect(cinema.swapSeatsInHall(1, 1)).to.be.equal('Unsuccessful change of seats in the hall.')

        });

        it('should return string with Successful.. when numbers are valid', function () {
            expect(cinema.swapSeatsInHall(10, 1)).to.be.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, 10)).to.be.equal('Successful change of seats in the hall.')

        });

        it('should return string with Unsuccessful.. when  the input is not valid', function () {
            expect(cinema.swapSeatsInHall([], 1)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, [])).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall([], [])).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall({}, 1)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, {})).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, null)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(null, null)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, undefined)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(undefined, undefined)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall()).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1.1, 2.2)).to.be.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(null, 2, 3)).to.be.equal('Unsuccessful change of seats in the hall.')

        })
    })
})
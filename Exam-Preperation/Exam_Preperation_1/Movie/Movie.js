class Movie {

    constructor(movieName, ticketPrice) {
        this.movieName = movieName
        this.ticketPrice = Number(ticketPrice)
        this.screenings = []
        this.totalProfit = 0
        this.soldTickets = 0
    }

    newScreening(date, hall, description) {
        for (let i = 0; i < this.screenings.length; i++) {
            if (this.screenings[i].date === date && this.screenings[i].hall === hall) {
                throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
            }
        }

        this.screenings.push({date, hall, description})
        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {
        let currentProfit;
        let checkMovie = false
        for (let i = 0; i < this.screenings.length; i++) {
            if (this.screenings[i].date.includes(date) && this.screenings[i].hall.includes(hall)) {
                checkMovie = true
                this.screenings.splice(i, 1)
                break
            }

        }
        if (checkMovie === false) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }

        currentProfit = Number(soldTickets) * this.ticketPrice
        this.soldTickets += Number(soldTickets)
        this.totalProfit += currentProfit
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`

    }

    toString() {
        let result = [
            `${this.movieName} full information:`,
            `Total profit: ${this.totalProfit.toFixed(0)}$`,
            `Sold Tickets: ${this.soldTickets}`,
        ];
        if (this.screenings.length > 0) {
            result.push(`Remaining film screenings:`);
            let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            for (const s of sorted) {
                result.push(`${s.hall} - ${s.date} - ${s.description}`);
            }
        } else {
            result.push(`No more screenings!`);
        }
        return result.join("\n");
    }


}


let m = new Movie('Wonder Woman 1984', '10.00');
m.newScreening('October 2, 2020', 'IMAX 3D', `3D`);
m.newScreening('October 3, 2020', 'Main', `regular`);
m.newScreening('October 4, 2020', 'IMAX 3D', `3D`);
m.endScreening('October 2, 2020', 'IMAX 3D', 150);
m.endScreening('October 3, 2020', 'Main', 78);
console.log(m.toString())
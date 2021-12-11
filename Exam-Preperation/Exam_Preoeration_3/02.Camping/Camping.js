class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500}
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.')
        }
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name === name) {
                return `The ${name} is already registered at the camp.`
            }
        }


        if (this.priceForTheCamp[condition] > Number(money)) {
            return 'The money is not enough to pay the stay at the camp.'
        }
        this.listOfParticipants.push({name, condition, power: 100, wins: 0})
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        let index = 0
        for (const nameKey of this.listOfParticipants) {
            if (nameKey.name !== name) {
                throw new Error(`The ${name} is not registered in the camp.`)
            }
            this.listOfParticipants.splice(index, 1)
            index += 1

        }
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let p1;
        let p2;
        for (const obj in this.listOfParticipants) {
            if (this.listOfParticipants[obj].name === participant1) {
                p1 = obj
            }
            if (this.listOfParticipants[obj].name === participant2) {
                p2 = obj
            }
        }

        if (participant2 !== undefined) {
            if (this.listOfParticipants[p1].condition !== this.listOfParticipants[p2].condition) {
                throw new Error('Choose players with equal condition.')
            }
        }


    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "child", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));

function tickets(properties, criterion) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    properties.forEach((line) => {
        let [destination, price, status] = line.split("|");

        let instance = new Ticket(destination, price, status);

        result.push(instance);
    });

    if (criterion === "destination") {
        result.sort((a, b) => {
            return Object.values(a)[0].localeCompare(Object.values(b)[0]);
        });
    } else if (criterion === "status") {
        result.sort((a, b) => {
            return Object.values(a)[2].localeCompare(Object.values(b)[2]);
        });
    } else {
        result.sort((a, b) => {
            return Object.values(a)[1] - Object.values(b)[1];
        });
    }

    return result;
}


console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'

))
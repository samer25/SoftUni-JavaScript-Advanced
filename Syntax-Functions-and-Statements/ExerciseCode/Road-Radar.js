function roadRadar(speed, area) {
    let limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };
    let status;
    let speeding = 'speeding';
    let excessive = 'excessive speeding';
    let reckless = 'reckless driving';

    if (limits[area] < speed) {
        let diff = speed - limits[area]
        if (diff <= 20) {
            status = speeding
        } else if (diff > 20 && diff <= 40) {
            status = excessive
        } else {
            status = reckless
        }
        return `The speed is ${diff} km/h faster than the allowed speed of ${limits[area]} - ${status}`


    }
    return `Driving ${speed} km/h in a ${limits[area]} zone`
}

console.log(roadRadar(40, 'residential'))
function listOfNames(arrNames) {
    function compare(a, b) {
        let ba = a.toUpperCase()
        let bb = b.toUpperCase()
        if (ba < bb) {
            return -1;
        }
        if (ba > bb) {
            return 1;
        }
    }
    arrNames.sort(compare)
    for (let i = 1; i < arrNames.length+1; i++) {
        console.log(`${i}.${arrNames[i-1]}`)
    }
}

listOfNames(["A", "C", "b", 'D', 'E' ])
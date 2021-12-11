function sortAnArrayBy2Criteria(arr) {
    function compare(a, b) {
        let ba = a.toUpperCase()
        let bb = b.toUpperCase()
        if (a.length < b.length) {
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }
        if (ba < bb) {
            return -1;
        }
        if (ba > bb) {
            return 1;
        }
    }

    arr.sort(compare)
    return arr.join('\n')
}

console.log(sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']))
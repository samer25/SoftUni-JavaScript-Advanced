function sortingNumbers(arrNumbers) {
    let newArr = []
    arrNumbers.sort((a,b) => a-b)
    while (arrNumbers.length > 0){
        let smallest = arrNumbers.shift()
        let biggest = arrNumbers.pop()
        newArr.push(smallest, biggest)
    }
    return newArr
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
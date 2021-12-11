function rotateArray(arr, rotation) {
    let newArr = []
    for (let i = 0; i < rotation; i++) {
        arr.unshift(arr.pop())
    }
    return arr.join(" ")
}

console.log(rotateArray(['1',
        '2',
        '3',
        '4'],
    2))
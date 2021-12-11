function janSNotation(arr) {
    let savedNum = []
    let operatorsCount = 1
    let numCount = 0
    for (const el of arr) {
        if (!isNaN(el)) {
            savedNum.push(el)
            numCount += 1
        } else {
            operatorsCount += 1
            if (el === '+') {
                let num1 = savedNum.pop()
                let num2 = savedNum.pop()
                savedNum.push(num2 + num1)
            }
            if (el === '-') {
                let num1 = savedNum.pop()
                let num2 = savedNum.pop()
                savedNum.push(num2 - num1)
            }
            if (el === '*') {
                let num1 = savedNum.pop()
                let num2 = savedNum.pop()
                savedNum.push(num2 * num1)
            }
            if (el === '/') {
                let num1 = savedNum.pop()
                let num2 = savedNum.pop()
                savedNum.push(num2 / num1)
            }
        }
    }
    if(operatorsCount < numCount){
        return 'Error: too many operands!'
    }
    if(operatorsCount > numCount){
        return 'Error: not enough operands!'
    }

    return savedNum[0]
}

console.log(janSNotation([15,
    '/']))
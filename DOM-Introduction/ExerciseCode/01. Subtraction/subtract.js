function subtract() {
    const firstNum = document.getElementById('firstNumber');
    const secondNum = document.getElementById('secondNumber');
    let subtractNums = Number(firstNum.value) - Number(secondNum.value)
    let result = document.getElementById('result')
    result.textContent += subtractNums
}


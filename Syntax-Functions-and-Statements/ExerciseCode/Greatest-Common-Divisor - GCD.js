function commonDivisor(num1, num2){
    while (num2){
        let common = num2
        num2 = num1 % num2
        num1 = common
    }
    return num1

}

console.log(commonDivisor(3, 9))
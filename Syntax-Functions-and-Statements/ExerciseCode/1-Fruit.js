function fruitCalc(fruit, weight, priceOfKg) {
    let neededMoney =  (weight * priceOfKg / 100) / 10
    let weightRounded = ((weight / 100) / 10).toFixed(2)
    neededMoney = neededMoney.toFixed(2)
    return "I need $" + neededMoney + " to buy " + weightRounded + " kilograms " + fruit + "."
}

console.log(fruitCalc('apple', 1563, 2.35))
function rectangle(num1, num2, c) {

    return {
        width: num1,
        height: num2,
        color: c.replace(c[0], c[0].toUpperCase()),
        calcArea() {
            return this.width * this.height
        }
    }
}


let rect = rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
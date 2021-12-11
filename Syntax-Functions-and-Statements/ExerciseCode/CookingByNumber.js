function cookingByNumber(num, ...args){

    let sum = 0
    let ready = []
    for(let i = 0; i<args.length; i++){
        let operators = {
            'fillet': (num * 0.80).toFixed(2),
            'bake': 3 * num,
            'chop': num/2,
            'dice': Math.sqrt(num),
            'spice': num += 1,
        }
        sum = operators[args[i]]
        num = sum
        ready.push(sum)
    }
    return ready.join('\n')
}

console.log(cookingByNumber('9','dice', 'spice', 'chop', 'bake', 'fillet'))
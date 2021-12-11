function solution() {
// • apple - made with 1 carbohydrate and 2 flavour
// • lemonade - made with 10 carbohydrate and 20 flavour
// • burger - made with 5 carbohydrate, 7 fat and 3 flavour
// • eggs - made with 5 protein, 1 fat and 1 flavour
// • turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
    let stock = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0

    }

    function preparing(command) {
        let [com, res, st] = command.split(' ')
        if (com === 'restock') {
            stock[res] += Number(st)
            return 'Success'
        }
        if (com === 'prepare') {
            if (res === 'lemonade') {
                let carbohydrate = 10 * Number(st)
                let flavour = 20 * Number(st)
                if (stock['carbohydrate'] >= carbohydrate && stock['flavour'] >= flavour) {
                    stock['carbohydrate'] -= carbohydrate
                    stock['flavour'] -= flavour
                    return 'Success'
                } else {
                    if (stock['carbohydrate'] < carbohydrate) {
                        return 'Error: not enough carbohydrate in stock'
                    } else {
                        return 'Error: not enough flavour in stock'
                    }
                }
            }
            if (res === 'apple') {
                let carbohydrate = Number(st)
                let flavour = 2 * Number(st)
                if (stock['carbohydrate'] >= carbohydrate && stock['flavour'] >= flavour) {
                    stock['carbohydrate'] -= carbohydrate
                    stock['flavour'] -= flavour
                    return 'Success'
                } else {
                    if (stock['carbohydrate'] < carbohydrate) {
                        return 'Error: not enough carbohydrate in stock'
                    } else {
                        return 'Error: not enough flavour in stock'
                    }
                }
            }
            if (res === 'burger') {
                let carbohydrate = 5 * Number(st)
                let flavour = 3 * Number(st)
                let fat = 7 * Number(st)
                if (stock['carbohydrate'] >= carbohydrate && stock['flavour'] >= flavour && stock['fat'] >= fat) {
                    stock['carbohydrate'] -= carbohydrate
                    stock['flavour'] -= flavour
                    stock['fat'] -= fat
                    return 'Success'
                } else {
                    if (stock['carbohydrate'] < carbohydrate) {
                        return 'Error: not enough carbohydrate in stock'
                    } else if (stock['fat'] < fat) {
                        return 'Error: not enough fat in stock'
                    } else {
                        return 'Error: not enough flavour in stock'

                    }

                }
            }
            if (res === 'eggs') {
                let fat = Number(st)
                let flavour = Number(st)
                let protein = 5 * Number(st)
                if (stock['fat'] >= fat && stock['flavour'] >= flavour && stock['protein'] >= protein) {
                    stock['fat'] -= fat
                    stock['flavour'] -= flavour
                    stock['protein'] -= protein
                    return 'Success'
                } else {
                    if (stock['protein'] < protein) {
                        return 'Error: not enough protein in stock'
                    } else if (stock['fat'] < fat) {
                        return 'Error: not enough fat in stock'
                    } else {
                        return 'Error: not enough flavour in stock'

                    }
                }
            }
            if (res === 'turkey') {
                let fat = 10 * Number(st)
                let flavour = 10 * Number(st)
                let protein = 10 * Number(st)
                let carbohydrate = 10 * Number(st)
                if (stock['carbohydrate'] >= carbohydrate && stock['flavour'] >= flavour && stock['protein'] >= protein && stock['fat'] >= fat) {
                    stock['carbohydrate'] -= carbohydrate
                    stock['fat'] -= fat
                    stock['protein'] -= protein
                    stock['flavour'] -= flavour
                    return 'Success'
                } else {
                    if (stock['protein'] < protein) {
                        return 'Error: not enough protein in stock'
                    } else if (stock['carbohydrate'] < carbohydrate) {
                        return 'Error: not enough carbohydrate in stock'
                    } else if (stock['fat'] < fat) {
                        return 'Error: not enough fat in stock'
                    } else {
                        return 'Error: not enough flavour in stock'

                    }
                }
            }
        }
        if (com === 'report') {
            return `protein=${stock["protein"]} carbohydrate=${stock["carbohydrate"]} fat=${stock["fat"]} flavour=${stock["flavour"]}`
        }


        // return stock
    }

    return preparing
}


let manager = solution();
console.log(manager('prepare turkey 1')); // Success
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare turkey 1'))
console.log(manager("report"))

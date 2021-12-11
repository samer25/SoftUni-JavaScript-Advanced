function storeCatalogue(input) {
    let result = new Map()
    input.sort((a, b) => {
            let ba = a.toUpperCase()
            let bb = b.toUpperCase()
            if (ba < bb) {
                return -1;
            }
            if (ba > bb) {
                return 1;
            }

        }
    )

    input.forEach(row => {
        let [product, price] = row.split(' : ')
        if (!result.has(product[0])) {
            result.set(product[0], new Map)
        }
        result.get(product[0]).set(product, price)
    })
    for (let [key, value] of result) {
        let values = value
        console.log(key)
        for (let [product, price] of values) {
            console.log(`${product}: ${price}`)
        }
    }
}


storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])
class VegetableStore {
    constructor(owner, location) {
        this.owner = owner
        this.location = location
        this.availableProducts = []
        this.types = []
        this.totalPrice = 0
    }

    loadingVegetables(vegetables) {
        let types = []
        vegetables.forEach(p => {
            let [type, quantity, price] = p.split(' ')
            quantity = Number(quantity)
            price = Number(price)

            if (this.types.includes(type)) {
                for (const product of this.availableProducts) {
                    if (product.type.includes(type)) {
                        product.quantity += quantity
                        if (product.price < price) {
                            product.price = price
                        }
                    }
                }
            } else {
                this.types.push(type)
                types.push(type)
                this.availableProducts.push({type, quantity, price})
            }

        });
        return `Successfully added ${types.join(', ')}`
    }


    buyingVegetables(selectedProduct) {
        let totalPrice = 0.00
        selectedProduct.forEach(s => {
            let [type, quantity] = s.split(' ')
            quantity = Number(quantity)
            if (!this.types.includes(type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            for (const p of this.availableProducts) {
                if (p.type === type) {
                    if (p.quantity < quantity) {
                        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                    }

                    totalPrice += p.price * quantity
                    p.quantity -= quantity
                }
            }

        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`


    }

    rottingVegetable(type, quantity) {
        for (const p of this.availableProducts) {
            if (p.type !== type) {
                throw new Error(`${type} is not available in the store.`)
            } else {
                if (p.quantity < quantity) {
                    p.quantity = 0
                    return `The entire quantity of the ${type} has been removed.`
                } else {
                    p.quantity -= quantity
                    return `Some quantity of the ${type} has been removed.`
                }
            }
        }

    }

    revision() {
        let text = ['Available vegetables:']
        let sorted = this.availableProducts.sort((a, b) => a.price > b.price ? 1 : a.price < b.price ? -1 : 0);
        for (const p of sorted) {
            text.push(`${p.type}-${p.quantity}-$${p.price}`)
        }
        text.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return text.join('\n')
    }

}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


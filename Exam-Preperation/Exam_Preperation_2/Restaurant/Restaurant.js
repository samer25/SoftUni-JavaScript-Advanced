class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney)
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(products) {
        products.forEach(p => {
            let [name, quantity, totalPrice] = p.split(' ')
            // let price = quantity * totalPrice
            if (totalPrice <= this.budgetMoney) {
                if (this.stockProducts.name === name) {
                    this.stockProducts[name] += Number(quantity)

                } else {
                    this.stockProducts[name] = Number(quantity)
                }
                console.log(this.budgetMoney)
                this.budgetMoney -= Number(totalPrice)
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }
        });
        return this.history.join('\n')
    }

    addToMenu(meal, needs, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                price: Number(price),
                products: {},

            }
            needs.forEach((el) => {
                let [name, quantity] = el.split(' ')
                this.menu[meal].products[name] = Number(quantity)
            })
            if (Object.keys(this.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }

    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...'
        } else {
            let result = []
            for (let meal in this.menu) {
                result.push(`${meal} - $ ${this.menu[meal].price}`)
            }
            return result.join('\n')

        }
    }

    makeTheOrder(meal) {
        if (this.menu[meal]) {
            const neededProducts = {}
            for (const product in this.menu[meal].products) {
                if (!this.stockProducts[product] || Number(this.stockProducts[product]) < Number(this.menu[meal].products[product])) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`

                } else {
                    neededProducts[product] = Number(this.menu[meal].products[product])

                }
            }
            for (const neededProductsKey in neededProducts) {
                this.stockProducts[neededProductsKey] -= Number(neededProducts[neededProductsKey])
            }
            this.budgetMoney += Number(this.menu[meal].price)
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`

        }
    }

}

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
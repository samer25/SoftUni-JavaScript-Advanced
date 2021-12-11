function argumentInfo(...args) {
    let count = {}
    for (const argument of args) {
        if (count.hasOwnProperty(typeof argument)) {
            count[typeof argument] += 1
        } else {
            count[typeof argument] = 1
        }
    }

    const sortable =
        Object.entries(count).sort(function ([aa, a], [bb, b]) {
            if (a === b) {

                if (aa.length < bb.length) {
                    return -1;
                }
                if (aa.length > bb.length) {
                    return 1;
                }
            }
            if (a > b) {
                return -1;
            }
            if (a < b) {
                return 1;
            }

        }).reduce((r, [k, v]) => ({...r, [k]: v}), {});
    printsObj.call(args)
    printsCountObj.apply(sortable)

    function printsObj() {
        for (const argument of this) {
            if (typeof argument === 'object'){
                console.log(`${typeof argument}:`)
            }else{
                console.log(`${typeof argument}: ${argument}`)

            }
        }
    }

    function printsCountObj() {
        for (const argumentsKey in this) {
            console.log(`${argumentsKey} = ${this[argumentsKey]}`)
        }
    }

}

argumentInfo({ name: 'bob'}, 3.333, 9.999);
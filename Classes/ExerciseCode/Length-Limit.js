class Stringer {
    constructor(string, length) {
        this.innerString = string
        this.innerLength = length
    }

    increase(value) {
        this.innerLength += value
    }

    decrease(value) {
        this.innerLength -= value
        if (this.innerLength < 0 ) {
            this.innerLength = 0
        }
    }

    toString() {
        let changedString = ''
        for (let i = 0; i < this.innerLength; i++) {
            if (this.innerString.length > i)
                changedString += this.innerString[i]
        }

        if (this.innerString.length !== changedString.length) {
            changedString += '...'
        }
        if (this.innerLength <= 0){
            return '...'
        }
        return changedString
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString());
// let s = new Stringer("Viktor", 6);
// s.decrease(3);
// console.log(s.toString())
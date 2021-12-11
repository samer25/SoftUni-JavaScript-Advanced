function createSortedList(input) {
    let arr = []
    let commands = {}
    commands.size = 0
    commands.add = function (input) {
        arr.push(input)
        commands.size += 1
        arr.sort((a, b) => {
            if (a < b) {
                return -1
            }
            if (a > b) {
                return 1
            }
        })
    }
    commands.remove = function (input) {
        if (input > -1 && input < arr.length) {
            arr.splice(input, 1)
            commands.size -= 1
        }

    }
    commands.get = function (input) {
        if (input > -1 && input < arr.length) {
            return arr[input]
        }
    }


    return commands
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(10));
list.remove(10);
console.log(list.size);
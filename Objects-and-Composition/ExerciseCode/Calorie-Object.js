function calorieObject(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            obj[arr[i]] = ''
        }else {
            obj[arr[i-1]] = Number(arr[i])
        }
    }
    return obj
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))
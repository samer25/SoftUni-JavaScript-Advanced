function sortArray(arr, sorting) {
    if (sorting === 'asc') {
        arr.sort(function (a,b){
            if(a > b){
                return 1
            }else{
                return -1
            }
        })
    } else if (sorting === 'desc') {
        arr.sort(function (a,b){
            if(b > a){
                return 1
            }else{
                return -1
            }
        })
    }
    return arr
}

console.log(sortArray([10, 8, 5, 7, 9, 6], 'desc'))
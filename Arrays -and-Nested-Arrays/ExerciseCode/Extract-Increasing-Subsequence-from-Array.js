function extractIncreasingSubsequenceFromArray(arr) {
    let c = 0
    return arr.reduce(function (pre, curr) {
        if (c <= curr) {
            pre.push(curr)
            c = curr

        }

        return pre
    }, [])
}

console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]))
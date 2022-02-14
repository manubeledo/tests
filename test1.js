let inputA = [1, 4, 3, 9];

let inputB = [1, 2, 4, 4];

let requiredSum = 8;

function sum(arr, value){
    arr.sort((a, b) => a - b)
    let i = 0
    let r = arr.length - 1
    while (i < r) {
        if (arr[i]+ arr[r] == value) return true
        else if (arr[i] + arr[r] < value) i++
        else r--
    }
    return false
}

console.log(`${sum(inputA, requiredSum)}`)
console.log(`${sum(inputB, requiredSum)}`)
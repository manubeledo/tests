let inputA = [1, 4, 3, 9];

let inputB = [1, 2, 4, 4];

let requiredSum = 8;

function sum(arr, value) {
    for (i = 0 ; i < arr.length - 1 ; i++){
        for (n = i + 1; n < arr.length; n++){
            if (arr[i]+arr[n] == value) return true
        }
    }
    return false
}

console.log(`outputA: ${sum(inputA, requiredSum)}`)
console.log(`outputB: ${sum(inputB, requiredSum)}`)

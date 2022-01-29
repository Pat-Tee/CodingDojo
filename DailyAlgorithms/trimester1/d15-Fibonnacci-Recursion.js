
function getFibSequence(num) {
    let fibList = [0]
    for (let i = 1, sum = 1; i <= num; i++) {
        fibList.push(sum)
        sum = fibList[i] + fibList[i-1]
        // fibList[i] += fibList[i-1]
    }

    return fibList
}

function recurseFibonacci2(num) {
    let fibList = getFibSequence(num)
    // console.log("List = ", fibList)
    if (num == 1) {
        return 1
    }

    return ( recurseFibonacci2(fibList.pop()) )
}

let branch1 = []
let branch2 = []

function recurseFibonacci(num) {
    if (num == 1) {
        return 1
    } else if (num== 0)
        return 0
        
    branch1.push(num - 1)
    branch2.push(num - 2)
    return (recurseFibonacci(num-1) + recurseFibonacci(num-2) )
}

let num = 6
console.log("\nFibonacci of ", num, "==", recurseFibonacci(num))
console.log(branch1, branch2)

// F0    F1    F2    F3    F4    F5    F6    F7    F8    F9    F10    F11
// 0     1     1     2     3     5     8     13    21    34    55     89
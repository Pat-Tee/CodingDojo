

function addNums(num) {

    if (num < 0) {
        console.log("\nNumber must be non-negative!\n")
        return 0
    }
    if (num <= 0) {
        return 0;
    }
    return num + addNums(num - 1)
}

function factorial( num ) {
    if (num % 1) {
        console.log("\n"+ num, "is not an integer, fixing it to: ")
        num = Math.floor(num)
        console.log(num, "\n")
    }

    if (num < 0) {
        console.log("\nNumber must be non-negative!\n")
        return 0
    }

    if (num == 1) {
        return 1;
    }

    return num * factorial(num - 1)
}

let num = 0

console.log(num, " added recursively to all the integers preceding it: ", addNums(num), "\n")
console.log(num, " multiplied recursively to all the integers preceding it: ", factorial(num), "\n")

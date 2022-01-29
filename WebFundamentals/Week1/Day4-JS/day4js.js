function isPal(arr) {

    let j = arr.length - 1;

    for (i=0; j > i; i++) {

        if (arr[i] == arr[j]) {
            j--;
        } else {
            return (arr + " is NOT a palindrome.");
        }
    }
    return (arr + " is a palindrome.");
}

var p = [1,2,3,4,5,4,3,2,1];
console.log(isPal(p));

p = [0,1,2,3,4,5,6,7,8,9];
console.log(isPal(p));

var s = "This is not a palindrome."
console.log(isPal(s));

s = "racecar";
console.log(isPal(s));
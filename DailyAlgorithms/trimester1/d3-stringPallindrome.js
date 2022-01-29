// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// const { max } = require("d3-array");

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "a oho! a" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

function isPallindrome(str) {
    j = str.length -1;

    for (i=0; i<j; i++) {
        if (str[i] !== str[j-i])
        return false;
    }
    return true;
}

console.log(isPallindrome("racecar"));
console.log(isPallindrome("unrad"));
// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

// function longestPallindrome(str) {

//     let longest = "";
//     let max = str.length;

//     for (var i=0; i < max; i++) {
//         for (var j=i+1; j < str.length; j--) {
//             if (isPallindrome(str.slice(i,j)) === true) {
//                 if(str.slice(i,j).length > longest.length) {
//                     longest = str.slice(i,j)
//                 }
//             }
//         }
//         console.log(i)
//     }

//     return longest;
// }

// console.log(longestPallindrome("racecar is a cool word"));
// console.log(longestPallindrome(' i do like to drive a racecar'));
// console.log(longestPallindrome('dadee'));

function longestPallindrome(str) {
    var palli = "";
    for (var i = 0 ; i < str.length-1 ; i ++) {
        for (var j = i + 1; j <= str.length ; j ++) {
            // check to see if this section of the string is a pallindrome
            if (isPallindrome(str.slice(i,j)) === true) {
                // is this new pallindrome's length greater than the existing 'longest pallindrome'?
                if (str.slice(i,j).length > palli.length) {
                    palli = str.slice(i,j);
                }
            }
        }
    }
    return palli;
}

console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));
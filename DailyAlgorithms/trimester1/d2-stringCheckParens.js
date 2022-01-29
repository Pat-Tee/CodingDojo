// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve


// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string
// function parensValid(str) {
//     let left = 0;
//     let right = 0;
    
//     for (i = 0; i< str.length/2; i++) {
//         if (str[i] === '(') {
//             left++;
//         } 
//         else if (str[str.length - i -1] === ')') {
//             right++;           
//         }

//         if(left < right)
//             return false;
//     }

//     return left == right;
//     // if (left == right && left != 0)
//     //     return true;
//     // else return false;
//     // console.log("Left: ", left);
//     // console.log("Right: ", right);
// }

function parensValid(str) {
    let left = 0;
    let right = 0;
    
    for (i = 0; i< str.length; i++) {
        if (str[i] === '(') {
            left++;
        } 
        else if (str[i] === ')') {
            right++;           
        }

        if(left < right)
            return false;
    }

    return left == right;
    // if (left == right && left != 0)
    //     return true;
    // else return false;
    // console.log("Left: ", left);
    // console.log("Right: ", right);
}

console.log("(()()) is valid? ", parensValid("(()())"));
console.log(")()) is valid? ", parensValid(")())"));
console.log("())( is valid? ", parensValid("())("));


// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

function bracesValid(str) {
    openBraces = {
        '{': 0,
        '[': 0,
        '(': 0 }
    closeBraces = {
        '}': 0,
        ']': 0,
        ')': 0 }
            
    for (i = 0; i< str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            openBraces[str[i]]++;
        } 
        else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
            closeBraces[str[i]]++;
        } 
        if((openBraces['['] < closeBraces[']']) || (openBraces['{'] < closeBraces['}']) || (openBraces['('] < closeBraces[')']))
            return false;
    }
    left = openBraces['['] + openBraces['{'] + openBraces['('];
    right = closeBraces[']'] + closeBraces['}'] + closeBraces[')'];
    return left == right;
}

console.log(bracesValid('({[({})]})')); //true
console.log(openBraces);
console.log(closeBraces);
console.log(bracesValid('d(i{a}l[t]o)n{e!')); //false
console.log(openBraces);
console.log(closeBraces);
console.log(bracesValid('{{[a]}}(){bcd}{()}')); //true

console.log(openBraces);
console.log(closeBraces);

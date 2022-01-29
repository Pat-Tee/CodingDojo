console.log("----")
console.log("1 to 20, all odd numbers:");
for (i = 1; i < 20; i++) {
    if (i % 2 == 1) console.log(i);
}
console.log("----")
console.log("From 100 to 0, all numbers divisible by 3:");
for (i = 99; i > 0; i -= 3) {
    console.log(i);
}
console.log("----")
console.log("Listing the values of an array:");

var arr = [4, 2.5, 1, -0.5, -2, -3.5]

for (i = 0; i < arr.length; i++)
    console.log(arr[i]);

console.log("----")
console.log("Summing all the numbers from 1 to 100:");
var sum = 1;
var equation = "1";
for (i = 2; i <= 100; i++) {
    sum += i;
    equation += "+" + i;
}
equation += " = " + sum;
console.log(equation);

console.log("----")
console.log("Multiplying all the numbers from 1 to 12:");
var product = 1;
var equation = "1";
for (i = 2; i <= 12; i++) {
    equation += "*" + i;
    product *= i;
}
equation.slice(-3);
equation += " = " + product;
console.log(equation);


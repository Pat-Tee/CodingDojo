// THIS SHOWS HOW "SET" CAN ONLY CONTAIN UNIQUE VALUES, AND BY USING THE "..." SPREAD OPERATOR
// WILL REMOVE DUPLICATES WHEN DEALING WITH OR CONVERTING TO AN ARRAY 
const array = [1,2,2,2,2,3,3,4,5];
const unique = [... new Set(array)];
console.log(unique);
//-----------------

// ADDING ?. BEFORE PARAMETER WILL STOP RUNTIME ERRORS IF THE FUNCTION DOES NOT EXIST; IT IS TESTED AND THEN IGNORED
const obj =  {
    func1: ()=>{console.log("func1")},
    func2: ()=>{console.log("func2")}
}

obj.func1();
obj.func2();
//obj.func3(); // if you uncomment this the program will halt here
obj.func3?.(); // this still compiles/runs
//------------------

// eval(string) WILL EXECUTE STRING IF IT CONTAINS VALID JAVASCRIPT ****** DON'T EVER USE THIS IN A PUBLIC FACING USAGE WITHOUT COMPREHENSIVE VALIDATION; HUGE SECURITY RISK ******
var a = "console.log('this is code inside a string')";
eval(a);
//------------------

// USE BACKTICKS " ` " FOR ENCLOSING AND "${VAR}" INSIDE A STRING TO AVOID HAVING TO TYPE SO MANY "+"'s TO CONCATENATE
let str1 = "First";
let str2 = "second";

console.log(`the first one is ${str1} and the second one is ${str2}`);
//------------------

// STREAMLINED TYPE CONVERSION
console.log(!!str1); // Will 'convert' to boolean, true if valued, false if null/undefined
//
console.log(+str1); // this is a string, + will convert to int, prints NaN if non-numeric
str1 = "900";
console.log(+str1);
str1 = "Hello";
console.log(+str1);
//
var int1 = 500;
var int2 = 400;
console.log(int1 + int2); // output is summed
console.log(int1 +""+ int2); // output is effectively concatenated
//-------------------

// TAKE ARGUMENTS FROM THE COMMAND LINE USING NODE.JS TO BE EASIER TO DO RANDOM OR SPECIFIC TESTING RATHER THAN CONTINUALLY CHANGING THE CODE TO DO VARIOUS "CONSOLE.LOG()"s
const args = process.argv.slice(2); // process.argv takes the command line with node and it's parameters as the first array entry, and the filepath as the second. 
args[0];                            // so we slice those 2 out and the third index, which is whatever follows our filename becomes index 0 in the array we created. Each space seperates
                                    // additional arguments into additional indices.
//-------------------


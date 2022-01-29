// mine, finally got working at lunchtime
// function convertDecToBin(decNum) {

//     let binNum = 0;                         // new integer to store binary conversion
//     let power = 1;                          // keep track of powers of ten

//     for (decNum; decNum; decNum >>= 1) {    // start with the decimal value passed in, while it is not zero, bit shift right one place. Equivalent to Math.floor(decNum / 2)
//         binNum += (decNum % 2) * power;     // multiply the modulus remainder of decNum by the current power of ten. Add to binNum
//         power *= 10;                        // power of ten is increased
//     }                                       // IE; as we divide the decimal number by 2, and we are multiplying the remainder by increasing power of ten and adding to itself 
//                                             // we are effectively using the ones, tens, hundreds, etc. places of an integer as binary bits 
//     return binNum;
// }

function convertDecToBin(decNum) {
    let binNum = 0;                         // new integer to store binary conversion
    let power = 1;                          // keep track of powers of ten
    
    while (decNum) {                        // loop until decNum is 0, which is when we have inspected/converted all the digits
        binNum += (decNum % 2) * power;     // multiply the modulus 2 remainder of decNum by the current power of ten. Add to binNum
        power *= 10;                        // power of ten is increased
        decNum >>= 1;                       // decimal number is bitshifted one place right. This is equivalent to Math.floor(decNum / 2);
    }                                       // i.e. : as we divide the decimal number by 2, and we are multiplying the odd modulus remainder by increasing power of ten and adding to itself 
                                            // so we are effectively using the ones, tens, hundreds, etc. places of an integer as binary bits 
    return binNum;
}

console.log("0 to binary:",convertDecToBin(0) ); //                       0
console.log("1 to binary:",convertDecToBin(1) ); //                       1
console.log("2 to binary: ", convertDecToBin(2) ); //                    10
console.log("3 to binary: ", convertDecToBin(3) ); //                    11
console.log("4 to binary: ", convertDecToBin(4) ); //                   100
console.log("5 to binary: ", convertDecToBin(5) ); //                   101
console.log("6 to binary: ", convertDecToBin(6) ); //                   110
console.log("7 to binary: ", convertDecToBin(7) ); //                   111
console.log("8 to binary: ", convertDecToBin(8) ); //                  1000
console.log("9 to binary: ", convertDecToBin(9) ); //                  1001
console.log("10 to binary: ", convertDecToBin(10) ); //                1010
console.log("11 to binary: ", convertDecToBin(11) ); //                1011
console.log("56 to binary: ", convertDecToBin(56) ); //              111000
console.log("57 to binary: ", convertDecToBin(57) ); //              111001
console.log("77 to binary:", convertDecToBin(77) ); //              1001101
console.log("1000 to binary: ", convertDecToBin(1000) ); //      1111101000

// found online
recDecToBin = (x) => x ? 
                        x % 2 + 10 * recDecToBin( (x - x % 2) / 2) 
                        : x;

// console.log("rec 2 to binary: ", recDecToBin(2) );
// console.log("rec 53 to binary: ", recDecToBin(3) );
// console.log("rec 56 to binary: ", recDecToBin(56) );
// console.log("rec 57 to binary: ", recDecToBin(57) );
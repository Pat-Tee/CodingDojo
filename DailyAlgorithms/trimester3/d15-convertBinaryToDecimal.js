function convertBinToDec(binNum) {

    let decNum = 0;                         
    let power = 0;                          

    while( binNum >= 1 ) {                  // summarily: as we divide by 10, check the modulus 10 remainder, which is 0 or 1, and raise that digit's value to the 2's power and add it together.
        decNum += (binNum % 10) << power;   
        binNum /= 10;
        power++; 
    }

    return decNum;
}
console.log( "binary 0 to decimal: ", convertBinToDec(0));  //                       0
console.log( "binary 1 to decimal: ", convertBinToDec(1));  //                       1
console.log( "binary 1000 to decimal: ", convertBinToDec(1000) );   //               8
console.log( "binary 111000 to decimal: ", convertBinToDec(111000) );   //          56
console.log( "binary 111000 to decimal: ", convertBinToDec(111001) );   //          57
console.log( "binary 1111101000 to decimal: ", convertBinToDec(1111101000) ); //  1000
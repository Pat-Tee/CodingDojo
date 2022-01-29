const dec2hex = (decNum) => {

        if (!decNum) return "0";

        let hexNum = "";
        let hex = {         // hex numbers have letters in them so we have to use a character lookup object to fill the new string
            0:'0',
            1:'1',
            2:'2',
            3:'3',
            4:'4',
            5:'5',
            6:'6',
            7:'7',
            8:'8',
            9:'9',
            10:'A',
            11:'B',
            12:'C',
            13:'D',
            14:'E',
            15:'F'
        }

        while( decNum > 0) {                  
            hexNum = hex[(decNum % 16)] + hexNum;   // use our lookup table to find the right character and add it to the string
            decNum >>= 4;                           // divide decNum by 16
        }
        return hexNum;
    }

console.log("Dec | Hex");
console.log( "0: ", dec2hex(0) );
console.log( "16: ", dec2hex(16) ); //  0x 10
console.log( "13: ", dec2hex(13) ); //  0x  D
console.log( "20: ", dec2hex(32) ); //  0x 20
console.log( "63: ", dec2hex(63) ); //  0x 3F
console.log( "99: ", dec2hex(99) ); //  0x 63
console.log( "127: ",dec2hex(127) ); // 0x 7F
console.log( "128: ",dec2hex(128) ); // 0x 80
console.log( "255: ",dec2hex(255) ); // 0x FF

const hex2dec = (hexNum) =>{    // hexNum must be a string

    if ( typeof(hexNum === 'number') )
        hexNum = hexNum.toString();

    hexNum = hexNum.toUpperCase();

    let decNum = 0;
    let power = 1;

    let hex = {         // lookup table for hex characters to integers
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15
    }

    let i = hexNum.length-1;                    // set index to start at last character

    while( i >= 0 ) {                  
        decNum += hex[ hexNum[i] ] * power;     // find the indexed value times 16's power at digit's place
        power <<= 4;                            // increase the place's power by 16
        i--;                                    // move index back one for the string
    }
    return decNum;
}

console.log( "0: ", hex2dec('0') );         // 0
console.log( "A: ", hex2dec('A') );         // 10
console.log( "63: ", hex2dec('63') );       // 99
console.log( "200: ", hex2dec('200') );     // 512
console.log( "FF: ", hex2dec('ff') );       // 255
console.log( "number 10: ", hex2dec(10) );  // 16
console.log( "number 63: ", hex2dec(63) );  // 99

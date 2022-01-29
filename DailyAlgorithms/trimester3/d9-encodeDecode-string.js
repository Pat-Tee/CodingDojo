// encode/decode by character and count

function decodeStr(inputStr) {
    let checkCount = {};
    let decodedStr = "";
    let count ="";
    let j = 0;

    for (i=0; i < inputStr.length; i++) {
        if (isNaN(inputStr[i]) ) {
            j = inputStr[i];                        // if string character at i is not a number, store it in j
            checkCount[inputStr[i]] = "";           // initiliaze a key in the count object; this is probably not necessary
            i++;
            while (!isNaN(inputStr[i])) {           // loop until string[i] is a number
                count += inputStr[i];                // add number characters to count, as a string
                i++;                                // increment i
            }
            checkCount[j] = count.valueOf(count);    // convert count, which is a string, to an integer, and assign is to the value of key j
            count = "";                              // reset count
            i--;                                      // necessary to move back one index value
        } 
    }
    console.log(checkCount);

    for (item in checkCount) {
        for (let i = 0; i < checkCount[item]; i++)
            decodedStr += item;
    }

    return decodedStr;
}

function encodeStr(inputStr) {
    let checkDupe = {};
    let encodedStr = "";

    for (let i =0; i < inputStr.length; i++) {
        if ( !checkDupe[inputStr[i]] )
            checkDupe[inputStr[i]] = 1;
        else 
            checkDupe[inputStr[i]] ++;
    }

    for (item in checkDupe) {
        console.log(item);
        encodedStr += item;
        encodedStr += checkDupe[item];
    }
    console.log(checkDupe);
    return encodedStr;
}
str = "abbcccddddddddddd";

console.log(str);
console.log(encodeStr(str));
console.log(decodeStr("a111b3") );

    // for (let i=0; i < inputStr.length; i++) {       // loops through the string and only add character to the new string if count is 1.
    //     if ( checkDupe[inputStr[i]] == 1 ) {
    //         newStr += inputStr[i];
    //     } else 
    //         checkDupe[inputStr[i]]--;               // if we have passed a duped character we update the count. this has the effect
    // }                                               // of only adding the most recent chacter that was a dupe


const unDupeStr = (inputStr) => {   // remove duplicate characters, leaving only the last one remaining

    let checkDupe = {};                             // create an object to count instances of each character using the character as a key, and count as the value
    let newStr = "";

    for (let i =0; i < inputStr.length; i++) {      // loop through the string once and count characters
        if ( !checkDupe[inputStr[i]] )
            checkDupe[inputStr[i]] = 1;
        else 
            checkDupe[inputStr[i]] ++;
    }

    console.log("original dupe count: ", checkDupe);

    for (let i=0; i < inputStr.length; i++) {       // loops through the string and only add character to the new string if count is 1.
        if ( checkDupe[inputStr[i]] == 1 ) {
            newStr += inputStr[i];
        } else 
            checkDupe[inputStr[i]]--;               // if we have passed a duped character we update the count. this has the effect
    }                                               // of only adding the most recent chacter that was a dupe

    console.log("updated dupe count: ", checkDupe);

    return newStr;
}
inputStr = "Snap Crackles Pops!";
console.log("original string: ", inputStr);
console.log("first dupes removed: ", unDupeStr("Snap Crackles Pops!") ); // 'SnCrackle ops!'
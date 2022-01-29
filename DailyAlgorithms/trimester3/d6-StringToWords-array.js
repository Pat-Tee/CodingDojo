function stringToArray(string) {
    let wordList = [];
    let word = "";

    for (let i = 0; i < string.length; i++) {
        if ( string[i] != " " )
            word += string[i];
        else if ( word != "") {
            wordList.push(word);
            word = "";
        }
        if ( i == string.length-1 && word != '' )
            wordList.push(word);
    }
    return wordList;
}

let sentence = "Hello                                   world!    Holo        wurld!     ";
console.log(sentence);
// console.log(stringToArray(sentence) );

/////////////
// attempt at recursion, broken
////////////
// stringToArrayRec = (string, i = 0) => {
//     let wordList = [];
//     let makeWord = (string) => {
//         let word = string;
//         if (string[i] == ' ' || (i === string.length-1 && word != "") )
//             word += ( makeWord(string, i+1) );
//     }
//     while ( i < string.length )
//         wordList.push( makeWord(string) );
//     return wordList;
// }

console.log( stringToArrayRec(sentence) );
///////////
// Abhilake
///////////
// const stringToArray = str => {

//     var result = []
//     let word = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != " ") {
//             word += str[i]
//             console.log("WORD BUILDING...", word)
//             // to add the last word to array
//             if (i == str.length - 1) {
//                 result.push(word);
//             }
//         } else {
//             result.push(word)
//             word = "";
//         }
//     }
//     return result
// }
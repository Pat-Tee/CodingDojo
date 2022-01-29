//Check if strings are anagrams (case insensitive)
// const anagram = (firstString, secondString)=> {
//     let string = (firstString + secondString).toLowerCase().replace(/\s/g, "");
//     let letters = {};
//     for (i in string) { if (string[i] !== ' ') if (! letters[ string[i] ]) letters[string[i]] = 1; else letters[string[i]] ++; }
//     for (letter in letters) if (letters[letter]%2) return false;
//     return true; }

const args = process.argv.slice(2);

const isAnagram = (firstString, secondString)=> {
    if (!firstString || !secondString) return console.log("2 strings are required.");
    let string = (firstString + secondString).toLowerCase().replace(/\s/g, ""); // make two strings into one lowercased, remove all spaces
    let letters = {};
    for (i in string) { 
        if (string[i] !== ' ') 
            if (! letters[ string[i] ]) letters[string[i]] = 1; 
            else letters[string[i]] ++; } //count each char
    for (i in letters) 
        if (letters[i]%2) return false;  // if there is an odd count of a char, then we dont have an anagram
    return true; } // we do have an anagram, but the only character we edge case for is spaces
// console.log(anagram("anagram", "margana") );    //true
// console.log(anagram("anagram", "nag a ram") );  //true
// console.log(anagram("race car", "car race") );  //true
// console.log(anagram("racecar", "car race") );   //true
// console.log(anagram("race cara", "car race") ); //false
// console.log(anagram("      aa", " a") );        //false
// console.log(anagram("race cara", "car race!") );//false

console.log(isAnagram(args[0],args[1]))
console.log(args)
// Given a string that contains letters or words seperated by spaces, count and output all possible consecutive combinations
// contained within the string. Make each subset output onto a newline in console with this format: "1:abc" (i.e. 'count':'subset'\n)
// Sort in descending order by count, and for each count alphabetically

function solution(string) {                    // consecutive, in order subsets
    let formattedOutput = "";
    let output = {};                           // dictionary to store total output
    let phrase = "";                           // temporary string to track each 'phrase' or subset
    let maxCount = 0;                          // variable to track highest number counted
    let entryCount = 0;                        // variable to track total entries

    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {   // outer for loop to start with each successive character
        for (let j=i; j< string.length; j++) {  // inner for loop to check all remaining characters starting with the one from the outer loop
            if (string[j] == ' ') break;        // if the character is a space, we break back to the outer loop, as we only want to check each word
            phrase += string[j];                // add a character to our temporary variable
            if (!output[phrase]) {              // if this phrase does not exist in our dictionary, we add an entry for it    
                output[phrase] = 1;
                entryCount++;                   // track total number of entries
            }
            else output[phrase]++;              // else we increment that phrase's count
            if (output[phrase] > maxCount)      // keep track of highest count
                maxCount = output[phrase];
        }
        phrase = "";                            // inner loop as ended, we must reset our temporary phrase variable
    }

    // Sort in descending count order
    for (maxCount; maxCount > 0; maxCount--) {  // use maxCount to loop through and sort
        let sorted = [];
        for (i in output) {                     // loop through the dictionary
            if (output[i] == maxCount) {
                sorted.push(i); // push current count items to an array
            }
        }
        sorted.sort();  // sort current count items alphabetically
        for (i in sorted)
            formattedOutput += maxCount+": "+sorted[i]+"\n"; // format and add to string
    }
    console.log(formattedOutput);
}

const args = process.argv.slice(2);

args[0] ?
solution(args[0]) :
console.log("Must provide a string. If providing a phrase, enclose in quotes")
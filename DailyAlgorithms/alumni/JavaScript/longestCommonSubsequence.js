// from Alex S
/*
write a function that takes two strings, s1 and s2
and returns the longest common subsequence of s1 and s2
(this is case sensitive)

"ABAZDC", "BACBAD" => "ABAD"
"AGGTAB", "GXTXAYB" => "GTAB"
"AAAAA", "AA" => "AA"
*/
// NOT COMPLETE
// function strSubSeq(s1, s2) {
//     var results = []
//     var len1 = s1.length
//     var len2 = s2.length
//     for (let i = 0; i <len1; i++) {
//         for (let j = i; j <len2; j++) {
//             if (s2[j] === s1[i]) {
//                 results += s2[j];
//             }
//         }
//     }
//     return results
// }

// console.log('result: ' + strSubSeq('BACBAD', 'ABAZDC'))
// console.log('result: ' + strSubSeq('AGGTAB', 'GXTXAYB'))
// console.log('result: ' + strSubSeq('aa', 'aaaa'))

function longestSubSeq(s1, s2, s1StartIdx = 0, s2StartIdx = 0, memo) { // providing additonal parameters for start index must be intended to search each string from arbitrary start positions. versatility!
    if (s1StartIdx >= s1.length || s2StartIdx >= s2.length) // edge case checks for above said start positions
        return '';
    if (memo == null) { // not sure yet why this is here
        memo = (new Array(s1.length))
        memo.fill(null)
        memo = memo.map(row => (new Array(s2.length)))
    } else if (memo[s1StartIdx][s2StartIdx] != null) {
        return memo[s1StartIdx][s2StartIdx]
    }
    const results = []
    for (let s1Idx = s1StartIdx; s1Idx < s1.length; s1Idx++) {//check from start index of str1 to end
        const s1Char = s1[s1Idx]//store 1 char
        const s2Idx = s2.indexOf(s1Char, s2StartIdx) //indexOf finds the character starting at string2 start index and matches it to string1 matching character and stores it to a new string2 index
        let result = [] // temporary result variable
        if (s2Idx !== -1) { // check for valid index value
            result.push(s1Char, ...longestSubSeq(s1, s2, s1Idx + 1, s2Idx + 1, memo)) //still not sure what memo is for but we've gone recursive now
        }
        results.push(result)//results is final
    }
    const longest = findLongest(results).join('') //this second function seems to compare and store the longer of potential subsets
    memo[s1StartIdx][s2StartIdx] = longest
    return longest
}

function findLongest(arr) {
    let longest = []
    for (let candidate of arr) {
        if (candidate.length > longest.length) {
            longest = candidate
        }
    }
    return longest
}

console.log('result: ' + longestSubSeq("AAAA", "AA"))   //AA
console.log('result: ' + longestSubSeq('BACBAD', 'ABAZDC')) //ABAD
console.log('result: ' + longestSubSeq('AGGTAB', 'GXTXAYB')) //GTAB
console.log('result: ' + longestSubSeq('AGGTABABAG', 'GXTXAYBABAGAG'))
console.log('result: ' + longestSubSeq('0', '00'))
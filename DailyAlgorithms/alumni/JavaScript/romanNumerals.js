/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let romanNums = {"I": 1, "V":5, "X": 10, "L":50, "C":100, "D":500, "M":1000}
    let result = 0;
    for (let i=0; i<s.length;i++){
        
        let current = romanNums[s[i]];
        let next = romanNums[s[i+1]];

        if (current < next) {
            result += next - current;
            i++;
        }
        else result += current;
    }
    
    return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("VI"));
console.log(romanToInt("MMXIX"));
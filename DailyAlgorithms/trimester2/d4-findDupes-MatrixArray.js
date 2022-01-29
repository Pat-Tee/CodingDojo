// Matrix Search

var big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21]
];

var match = [
    [67,78,89],
    [43,32]
];

var nomatch = [
    [67,45],
    [87,43]
];

for(var y = 0; y < big.length; y++) 
    console.log(big[y])
console.log("\n");
    


function findDuplicates (source, pattern) {
    let match = false;

    for(var y = 0; y < pattern.length; y++) 
        console.log(pattern[y])

    for (let y = 0; y < source.length; y++) {
        for (let x = 0; x < source[y].length; x++) {
            let py = 0, px = 0;                                       //reset pattern iterators
            
            if ( source[y][x] == pattern[0][0] ) {                    //compare source[position] to first value of pattern
                for (py=0; py < pattern.length; py++)
                    for (px=0; px<pattern[py].length; px++)
                        if ( source[y+py][x+px] == pattern[py][px] ) { //compare source [position + offset of pattern] to pattern[]
                            match = true;
                        } else match = false;
            } 
        }
    }
    return match;
}

console.log(findDuplicates(big, match) );
console.log(findDuplicates(big, nomatch) );

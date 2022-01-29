Number.prototype.isPrime = function() {
    square = Math.floor( Math.sqrt(this) );

    for( let i=2; i <= square; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }

function revArr(str) {
    let str2 = '';
    for (let i = str.length ; i >= 0; i--) {
        str2 += str[i];
    }
    return str2;
}

var story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

var { performance } = require('perf_hooks');
var start = performance.now();
const reversed = revArr(story);
// const reversed = story.split("").reverse().join("");
console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log(reversed);

let num = 72;
start = performance.now();
console.log(num+" is prime: ", num.isPrime() );
console.log(`This took ${performance.now() - start} milliseconds to run`);

start = performance.now();
let primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


// ANSWER: the iterative fib is faster

// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);
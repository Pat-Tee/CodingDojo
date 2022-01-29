// recursive

function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    var { performance } = require('perf_hooks');
    var start = performance.now();
    console.log(rFib(20));
    console.log(`This took ${performance.now() - start} milliseconds to run`);
    // iterative

    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
}
    performance = require('perf_hooks');
    start = performance.now();
    console.log(iFib(20));
    console.log(`This took ${performance.now() - start} milliseconds to run`);

let x = 0, y = 1;

x < y ? (console.log("x is less than y"), console.log("y is greater than x"))
        : (console.log("y is less than x"), console.log.apply("x is greater than y"))
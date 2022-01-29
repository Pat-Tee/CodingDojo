const { performance } = require('perf_hooks');
// Given a limit of number n, find all primes up to and including that limit

const n = process.argv.slice(2);

function findPrimes(n) {

    let primes = []; // array to store primes
    let prime = true; // boolean for prime testing

    if (!(n%2)) n -= 1; // in case n is an even number, make it odd
    for (let i=n; i>1;i-=2) { // start at given limit and check downwards
        prime = true; // assume prime
        for (var j=3;j<i;j+=2) { // check all odd numbers as divisors for i, which started at n
            if (!(i % j)) { // if i modulus j is 0, i is not prime
                prime = false;
            }
        }
        if (prime) primes.push(i); // prime was not disproven, add to array
    }
    return primes;
}

// let startTime = performance.now();
// console.log(findPrimes(n));
// let finishTime = performance.now();

// let myRunTime = finishTime - startTime;
// console.log(`my runtime: ${finishTime-startTime}`);

// From GeeksForGeeks.org
// javascript program to print all
// primes smaller than or equal to
// n using Sieve of Eratosthenes
function sieveOfEratosthenes(n)
{
	// Create a boolean array
	// "prime[0..n]" and
	// initialize all entries
	// it as true. A value in
	// prime[i] will finally be
	// false if i is Not a
	// prime, else true.
	prime = Array.from({length: n+1}, (_, i) => true);
    let primes = [];
	for (p = 2; p * p <= n; p++)
	{
		// If prime[p] is not changed, then it is a
		// prime
		if (prime[p] == true)
		{
			// Update all multiples of p
			for (i = p * p; i <= n; i += p)
				prime[i] = false;
		}
	}

	// Print all prime numbers
	for (i = 2; i <= n; i++)
	{
		if (prime[i] == true)
            primes.push(i);
			// console.log(i + " ");
	}
    console.log(primes);
}

// Driver Code
startTime = performance.now();
console.log(sieveOfEratosthenes(n));
finishTime = performance.now();
let geeksRunTime = finishTime - startTime;
console.log(`geeks runtime: ${finishTime-startTime}`);
// This code is contributed by 29AjayKumar
// (myRunTime > geeksRunTime) ? console.log("geeks is this many times faster: "+myRunTime/geeksRunTime) : console.log("mine is this many times faster: "+geeksRunTime/myRunTime);



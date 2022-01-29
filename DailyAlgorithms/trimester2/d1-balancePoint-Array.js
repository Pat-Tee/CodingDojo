//a comma is a pivot point, does an array have a mirror sum around a pivot point?
function balancePoint(arr) {
    console.log(arr);
    let i = 0, j= 1, iSum = 0, jSum = 0; //i is our left hand side iterator, iSum is our left hand side sum; j and jSum for the right hand side
    let max = arr.length;
    
    for (i; i<j; i++) {
        iSum += arr[i];                 //i always starts from the beginning of the array, and iSum is a running sum up to j which

        for (j = i + 1; j<max; j++) {   //j starts one number after i, so as our "i" for loop increases our j moves over to make a left side / right side dynamic
            jSum += arr[j];
        }

        if (iSum == jSum)               // we have made a left side and right side sum and comparison, if they are equal at any point after an iteration we return true
            return true;
        jSum = 0;                       //we have to reset jSum for the next iteration
    }
    return false;                       //iSum and jSum were never equal, we return false
}

console.log("\n____balancePoint____");
console.log(balancePoint([1,2,3]));
console.log(balancePoint([1,2,3,2,1]));
console.log(balancePoint([1,2,3,4,10]));
console.log(balancePoint([10,1,2,3,4]));


//a value/index is a pivot point, does an arr have a mirror sum around a pivot point?
function balanceIndex(arr) {
    console.log(arr);
    let i = 0, j= 1, iSum = 0, jSum = 0;
    let max = arr.length;
    
    for (i; i<=j; i++) {                      // we do the same thing as the other function, but this time i overlaps j, making each index/value a potential pivot
        iSum += arr[i];
        for (j = i; j<max; j++) {             // again, j overlaps i for the above reason
            jSum += arr[j];
        }
        if (iSum == jSum) 
            return true;
        jSum = 0;
    }
    return false;
}

console.log("\n____balanceIndex____");
console.log(balanceIndex([1,2,3]));
console.log(balanceIndex([1,2,3,2,1]));
console.log(balanceIndex([1,2,3,4,10]));
console.log(balanceIndex([10,1,2,3,4]));


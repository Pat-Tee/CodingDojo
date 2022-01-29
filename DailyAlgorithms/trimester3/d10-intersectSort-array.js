const intersectArray = (arr1, arr2) => { // assumes two sorted arrays

    let newArr = [];
    let checkVal = 0;
    let start= 0;

    if (arr1.length > arr2.length) 
        [arr1, arr2] = [arr2, arr1];

    while (arr1.length > 0) {
        checkVal = arr1.shift();
        for (let i=start; i<arr2.length; i++) {
            if (checkVal === arr2[i]) {
                newArr.push( checkVal );
                start = i+1;
                break;
            }
        }
    }
    return newArr;
}
console.log("\nintersectArray: ", intersectArray([1,2,3,4,4,5,6,9,9], [2,3,3,4,4,6,9,10,10,10])); // returns [2,3,4,4,6,9]
console.log("\nintersectArray: ", intersectArray([2,3,3,4,4,6,9,10,10,10], [1,2,3,4,4,5,6,9,9] )); // returns [2,3,4,4,6,9]
console.log("\nintersectArray: ", intersectArray([1,2,3,4,4,4], [1,2,3,4,4] )); // returns [1,2,3,4,4]
console.log("\nintersectArray: ", intersectArray([1,2,3,4,4], [1,2,3,4,4,4,4,4,4,4,4] )); // returns [1,2,3,4,4]
console.log("\nintersectArray: ", intersectArray([1,1,3,3,3,4,9], [1,2,3,6,8,9,9])); //[1,3,9]
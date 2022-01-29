// // Saurabh
// const combine = (arr1, arr2)=>{
//     //your code here
//     let result = []
//     let i = 0;
//     let j = 0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i] <arr2[j]){
//             result.push(arr1[i])
//             i++
//         }else{
//             result.push(arr2[j])
//             j++
//         }
//     }

//     while (i<arr1.length){
//         result.push(arr1[i])
//         i++
//     }

//     while (j<arr2.length){
//         result.push(arr2[j])
//         j++
//     }

//     return result
// }

// Alex Stack
const combine = (arr1, arr2) => {
    let result = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result;
}

// const mergeSort = ( arr1 ) => {

//     let arr2 = [];                                          // create a second array for second half
//     let leftHalfLength = Math.floor(arr1.length / 2 );      // set first half length

//     for ( let i = 0; i < leftHalfLength; i++ ) {            // loop through first half and seperate into 2 arrays
//         arr2.push( arr1.shift() );
//     }

//     if ( arr1.length < 2 || arr2.length < 2 )               // limit check for the bottom of the recursion chain
//         return combine( arr1, arr2 );                       // recombine the 2 arrays and go back up the chain
//     else
//         return combine( mergeSort( arr1 ), mergeSort( arr2 ) ); // recurse through the arrays until at least one has only one element
// }

const mergeSort = ( arr1 ) => {

    let arr2 = [];                                          // create a second array for second half
    let leftHalfLength = Math.floor(arr1.length / 2 );      // set first half length

    console.log("array length == ", arr1.length);           // debug log

    for ( let i = 0; i < leftHalfLength; i++ ) {            // loop through first half and seperate into 2 arrays
        arr2.push( arr1.shift() );
    }

    console.log("arr1: ", arr1,"arr2: ", arr2);             // debug log : shows the splitting on the way down the reccursion chain

    if ( arr1.length < 2 || arr2.length < 2 )               // limit check for the bottom of the recursion chain
        return combine( arr1, arr2 );                       // recombine the 2 arrays and go back up the chain
    else
        return combine( mergeSort( arr1 ), mergeSort( arr2 ) ); // recurse through the arrays until at least one has only one element
}

// console.log( combine( [3,6,9,10,11,15,18,19], [2,3,5,14] ) ); //[2,3,3,5, 6, 9, 10, 11,14, 15, 18, 19]
// arr = [8,7,6,5,4,3,2,1];

// console.log( combine( [4,6,8], [1,7,3,2,5] ) );
console.log( mergeSort(arr) );

// // Saurabh, using .slice()
// const mergeSort= (arr)=>{
//     //base case --> when the length of the array is <= 1 (when we have single element array)
//     if(arr.length<=1){
//         return arr;
//     }
//     //recursively splice it until we get single element arrays
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid))
//     console.log("left is this-->", left)
//     console.log("right is this-->", right)

//     return combine(left, right)




// }

// console.log(mergeSort([7,5,9,2,3,1,0]))
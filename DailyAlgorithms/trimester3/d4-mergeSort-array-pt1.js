//create a function that accepts 2 sorted arrays, and combines them into 1 sorted array and returns that sorted array

const combine = (arr1, arr2)=>{

    let result = [];
    let smallArray = arr1;
    let largeArray = arr2;
    let j = 0;

    if ( arr1.length > arr2.length ) {
        smallArray = arr2;
        largeArray = arr1;
    }

    while ( smallArray.length > 0 ) {

        if ( smallArray[0] <= largeArray[j] ) {
            largeArray.splice(j, 0, (smallArray.shift()) );  /////not working
            // result.push( smallArray.shift() );
        // } else 
        //     result.push( largeArray[j] );
        }
    j++;

    return result;
}

mergeSort = ( arr1, arr2=[] ) => {

    let leftHalfLength = Math.floor(arr1 /2 );
    let rightHalfLength = arr1.length - leftHalfLength;

    console.log("array length == ", arr1.length);

    for ( let i = leftHalfLength; i < leftHalfLength+rightHalfLength-1; i++ ) {
        arr2.push( arr1.shift() );
    }

    if ( leftHalfLength == 1 || leftHalfLength == 1 )
        return ( combine(arr1, arr2) );
        else return mergeSort( arr1, arr2 );
}

// console.log( combine( [3,6,9,10,11,15,18,19], [2,3,5,14] ) ); //[2,3,3,5, 6, 9, 10, 11,14, 15, 18, 19]
arr = [8,7,6,5,4,3,2,1];

console.log( mergeSort(arr) );

// mergeSort = (arr) => {

//     return ( divideAndConquer = (arr1, arr2) => {
//                 arrFirstHalf = Math.floor(arr.length / 2);
//             } )
// }

//// Saurabh
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
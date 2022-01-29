let selectionSort = (arr) => {
    let j = arr.length-1;

    for (j; j > 0; j-- )                                    // descend backwards from the end of the array
        for (let i = 0; i < j; i++) {                       // run forwwards through the array
            if ( arr[i] > arr[j] )                          // compare each element to the element at the end of the array
                [ arr[i], arr[j] ] = [ arr[j], arr[i] ];    // if greater, then swap
        }
    return arr;
}

let selectionSortRec = (arr, i) => {
    if ( arr[i] > arr.length-i-1)                                       // compare current value to one mirrored from end
        [ arr[i], arr[length-i-1] ] = [ arr[arr.length-i-1], arr[i] ];  // if greater, than swap
    return ( selectionSort( arr, i-1 ) );                               // recurse through the array using one less in length
}

var arr = [8,70,6,55,42,3,2,1];
var arr2 = [8,70,6,55,42,3,2,1];

console.log( "\nOriginal array: ", arr );
console.log( "\nSorted array: ", selectionSort(arr) );

console.log( "\nOriginal array: ", arr2 );
console.log( "\nRecursive Sorted array: ", selectionSortRec(arr2, arr2.length) );
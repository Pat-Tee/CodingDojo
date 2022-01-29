//////////Alex Stack
const insertionSort = (arr) => { 
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i] //setting the index of i into a temp variable 
        let j = i - 1 //looking left
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = temp //swapping
    }
    return arr
}
//////////

const insertionSort2 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1])
                [ arr[j], arr[j-1] ] = [ arr[j-1], arr[j] ];
        }
    }
    return arr;
}

//WORK IN PROGRESS
let insertionSortRec = (arr, i, j) => {
    
    console.log("i=", i, " and j=", j);

    if ( arr[i] < arr[i-1] && i > 0 ) {                                             // compare current value to one before it
        insertionSortRec(arr, i-1,j);
    } else [ arr[i], arr[i-1] ] = [ arr[i-1], arr[i] ];           // swap at end of recursion

    if (j < arr.length)
        return ( insertionSortRec( arr, j+1 ) );                           // recurse through the array using one less in length
    else return arr;
}
///////////

//////////////////
//Timother Granger
const insertionRecur = (arr, pos = 1) => {
    if (pos > arr.length - 1){
        return arr;
    }
    else if (arr[pos] < arr[pos - 1]){
        [arr[pos-1], arr[pos]] = [arr[pos], arr[pos-1]];
        return insertionRecur(arr, pos - 1)
    }
    else {
        return insertionRecur(arr, pos + 1)
    }
}
////////////

// console.log(insertionSort([4,7,1,2,5,0,9,6]));
// console.log(insertionSort2([4,7,1,2,5,0,9,6]));
// console.log(insertionSortRec([4,7,1,2,5,0,9,6]));
console.log(insertionRecur([4,7,1,2,5,0,9,6]));
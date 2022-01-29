const bubbleSort = (arr) => {
    leng = arr.length;
    for (let i = 0; i < leng; i++) {
        for (let j = 0; j < leng; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }

    return arr;
}

const bubbleRec = (arr, leng = arr.length) => {
    let i = arr.length;
    if (arr[i] > arr[i-1])
        arr[i], arr[i+1] = arr[i+1], arr[i];
    if (leng = 1)
        return;
    bubbleRec(arr, leng - 1);
}

var arr = [10,9,8,7,6,5,4,3,2,1];
console.log(arr);
console.log( bubbleSort(arr) );

arr = [10,9,8,7,6,5,4,3,2,1];
console.log(arr);
console.log( bubbleRec(arr) );
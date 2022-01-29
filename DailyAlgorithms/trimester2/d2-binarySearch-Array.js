var myList = [0,1,2,3,4,5,6,7,8,9];

function binarySearch(arr, value) {
    let length = arr.length;
    let mid = Math.ceil(length / 2);
    let prevMid = mid;
    let found = false;
    let lowerLimit = 0, upperLimit = length - 1;
    
    for (let i = lowerLimit; i <= upperLimit; i++) {
        mid = Math.ceil( (upperLimit - lowerLimit / 2) );
        prevMid = mid;
        if (value < myList[lowerLimit+mid]) {
            upperLimit = mid;
        }
        else if (value > myList[lowerLimit+mid]) {
            upperLimit = prevMid;
            lowerLimit += mid;
        }
        else {
            found = true;
            return mid;
        }
        i = lowerLimit;
    }
}

function binarySearchRecurse(arr, value) {
    let mid = Math.ceil(arr.length/2);
    console.log("mid is now "+mid);
    if (arr.length > 1){
    if (value == arr[mid])
        return mid;
    if (value < arr[mid] ) {
        console.log(value+" is less than "+arr[mid]+" and arr.length is "+arr.length);
        binarySearchRecurse(arr.slice(0, mid), value);
    }
    if (value > arr[mid] ) {
        console.log(value+" is greater than "+arr[mid]+" and arr.length is "+arr.length);
        binarySearchRecurse( arr.slice(mid-1, arr.length), value );
    }
}
return null;
}


console.log( myList[binarySearch(myList, 4)] );
// console.log("The index of the value "+"4"+" is "+ binarySearchRecurse(myList, 4) );
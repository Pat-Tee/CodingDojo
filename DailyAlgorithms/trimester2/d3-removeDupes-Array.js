function removeDupe(arr) {
    let newArr = [];
    let unique = true;

    for (let i=0; i <arr.length; i++) {
        unique = true;
        
        for (let j=arr.length-1; j>i; j--) {
            if (arr[i] == arr[j]) {
                unique = false;
                console.log("dupe found");
            }
        }

        if (unique == true) {
            newArr.push( arr[i] );
        }
    }

    return newArr;
}

console.log(removeDupe([1,2,3,4]));
//                              x x
console.log(removeDupe([1,2,3,4,2,4]));
//                            x x x x        x x
console.log(removeDupe([1,2,3,3,4,2,4,1,5,10,5,3]));
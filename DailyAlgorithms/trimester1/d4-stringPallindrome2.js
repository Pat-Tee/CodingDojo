// Write a function that given a sorted array of numbers, returns a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

// console.log(bookIndex([1,3,4,5,7,8,10,12]))
//Alex G's group
function bookIndex(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let temp = i
        while (arr[i]+1===arr[i+1]) {
            i++
        }
        if (arr[temp]==arr[i]) {
            newArr.push(arr[temp])
        }
        else{
        newArr.push(arr[temp]+'-'+arr[i])
        } 
    }
return String(newArr)
}
//end


// FAILED



arr = [1,2,3,5,8,9,10,11];

console.log(bookIndex(arr));
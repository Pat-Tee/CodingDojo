// didnt like the solutions presented

// const unionSortRecurse = (arr1, arr2, i=0, j=0)=>{ //doesnt work yet

//     if (arr1[i] == arr2[j]) {
//         unionSortRecurse(arr1, arr2, i++, j++);
//     }
//     else 
//         return ([...arr1, ...arr2]);
// }

console.log( unionSort([1,2,2,2,7,7] , [2,2,6,6,7,7]) ) // [1,2,2,2,6,6,7,7]
// console.log( unionSortRecurse([1,2,2,2,7,7] , [2,2,6,6,7,7]) ) // [1,2,2,2,6,6,7,7]
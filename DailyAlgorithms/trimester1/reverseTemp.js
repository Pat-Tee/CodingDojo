
// var arr = "Svetlana";
// var arr = ['1','2','3','4','5'];

// function revArr(str) {
//     let arr2 = str.split("");
//     for(let i =0; i < arr2.length / 2; i++) {
//         [arr2[i], arr2[arr2.length-1 - i]] = [arr2[arr2.length - i -1], arr2[i]];
//     }
//     let arr = arr2.join("");
//     return arr;
// }

function revArr(str) {
    let str2 = '';
    for (let i = str.length ; i >= 0; i--) {
        str2 += str[i];
    }
    return str2;
}

// function revArr(str) {
//         return (str === '') ? '' : revArr(str.substr(1)) + str.charAt(0);
//     }
// function revArr(arr) {
//     for(let i =0; i < arr.length/2 ; i++) {
//         [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[i]];
//     }

//     return arr;
// }
// console.log(revArr(arr));
// console.log(arr);
// arr[1] = 'b';
// console.log(arr);
// console.log(revArr(arr));

var story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

var { performance } = require('perf_hooks');
var start = performance.now();
const reversed = revArr(story);
// const reversed = story.split("").reverse().join("");
console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log(reversed);
// start = performance.now();
// const reversed2 = revArr(story);
// console.log(`This took ${performance.now() - start} milliseconds to run`);
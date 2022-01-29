// given a string, return all the 'in order' subsets
// i.e. all possible index and subset combinations
// "abc" = ["", a, b, c, ab, ac, bc, abc]
// from saurabhs algos
// const ios = (str)=>{
//     let result = [""]
//     for (i in str){
//         // console.log(str[i])
//         result.push(str[i])
//         for(j in str){
//             if(str[j]!= str[i] && j>i){
//                 result.push(str[i]+str[j])
//             }
//         }
//     }
//     result.push(str)
//     console.log(result)
// }

// ios("banana")


//note: try with growing slice
// const subset = (str) => {

//     let set = [""];
//     let subSet = "";
//     let comboLength = 1;
//     let iteration = 0;

//     while (iteration != str.length) {

//         for (let start= iteration; start < str.length; start++) {
//             for(let position = start; position < str.length; position++) {

//             }
//         }
        

//         iteration ++;
//     }

//     return set;
// }

// console.log( subset("abc") );       // a b c ab ac bc abc
// const subset=(str)=> {

//     let combinations = [""];
//     let combo = "";
//     let comboLength = 1;
//     let iterationLength = 1 << str.length; 

//     while (iterationLength > 0){
//         for (i=0; i < str.length; i++) {
//             combo = str[i];
//             combinations.push(combo);
//             comboLength = 1;
//             for (j=i; j < comboLength && i + comboLength < str.length; j++) {
//                 combo = str[i] + str[j]
//                 combinations.push(combo);
//             }
//             comboLength++;
//             combo="";
//         }
//     }

//     return combinations;
// }

// const subsetR=(str, i = 0)=> {
//     let list = [];

//     if (i == str.length)
//         return list;
//     else 
//         return list.push(subsetR(str, i+1))
// }

// console.log( subset("abcde") );     //

// console.log( subsetR("abc"));


//TIMS solution --NOTE* this is not a complete solution
// const inOrderSubsets = string => {
//     // output is empty array to start, we will push into it
//     let output = [""];
//     // loop for subStringLength
//     for (let i = 1; i <= string.length; i++) {
//         for (let j = 0; j <= string.length - i; j++) {
//             let temp = "";
//             // another loop
//             for (let k = 0; k < i; k++) {
//                 temp += string[j+k];
//             }
//             output.push(temp);
//         }
//     }
//     return output;
// }
// console.log(inOrderSubsets("bigcars"));


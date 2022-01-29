var a = [1,"2","abacus"];

var b = {
    "name": "Example of Exampling",
    "email": "example@exampleemail.com"
}

var c = true;

var d = {
    "thing1": a,
    "thing2": b,
    "thing3": [a,b,c],
}


console.log(typeof d);

// function reverse(arr) {
//     var temp1;
//     var temp2;
//     var j = arr.length - 1;

//     for (i = 0; i < j; i++) {

//         temp1 = arr[i];
//         temp2 = arr[j];

//         arr[i] = temp2;
//         arr[j] = temp1;
//         j--;
//         console.log(arr);
//         }

//     return arr;
// }

// var arr = [1,2,3,4,5];

// console.log(reverse(arr));

// arr = [1,3,5,7,9,11,13,15,17];

// console.log(reverse(arr));
//------------------------------
// var currentWeather = "rainy";
// var tomorrowWeather = "sunny";
// var temp = currentWeather;

// currentWeather = tomorrowWeather;
// tomorrowWeather = temp;

// console.log(`Today is ${currentWeather}`);
// console.log(`Tomorrow is ${tomorrowWeather}`);
//---------------------------------------
// var start = 0;
// var end = 12;

// while (start < end) {
//     console.log("start: " + start + " end: " + end);
//     start += 2;
//     end -= 2;
// }

// The apocalypse finally happened. There was a massive outbreak, a pandemic with no cure. The world has been torn apart, cities crumbled to the ground, no hope for mankind in sight.
// After 3 years of surviving you find yourself and your group traveling towards a small town somewhere in the MidWest. On the side of the road lay a dying man. 
// Your group tries to help him but the sickness has taken over and he only has moments left. With his last words he tells you that there is a cure. 
// "In the tall building at the end of the road, on the 6th floor, at the end of the hall, there is a room with a digital scale and a cabinet. 
// Inside the cabinet are 20 pill bottles, each bottle containing 20 pills each. One bottle contains the cure, the pills in that bottle weigh 1.01 grams each. 
// The rest of the bottles contain pills that weigh 1 gram each and when consumed will kill you. The scale in the room works but it only has enough battery life to weigh something once.
// It will give you one reading then it will die...". Your group sets forth to the breakout room of your choice to save the world.

// matthew dgugly-
// 
// take each bottle and empty it, then add 1 pill from the first, 2 pills from the second etc 
// put all the bottles on the scale, and however much the decimal weight is off by identifies the bottle that has the pills that weight 1.01g , rather than 1.0g


// bottle #: 1      2        3       4      5       6       7       8       9       10 
// quantity: 1      2        3       4      5       6       7       8       9       10
// weight  : 1.0    2.0      3.0     4.4    5.0     6.0     7.0     8.0     9.0     10.0

//total weight: 55.4

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let cureBottleNum = Math.floor(Math.random() * 20);
let totalWeight = 0;

arr[cureBottleNum] = arr[cureBottleNum] * 1.1;

for (i = 0; i < 20; i++) {
    totalWeight += arr[i];
}

console.log("\n");
console.log("You weighed all the bottles and the weight is: ", totalWeight);
console.log(arr);

totalWeight = 0;
arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (i = 1; i < 21; i++) {
    totalWeight += i;
}
console.log("The weight of all the bottles using this method with no difference in pill weight would have been:", totalWeight);

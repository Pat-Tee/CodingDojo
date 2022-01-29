var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
theDojo = randomizeDojo(theDojo,10,10);
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  
  return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.

function howMany(i, j, element) {
    let x= i -1;
    let y = j -1;
    let minY = y;

    let maxX = theDojo[i].length;
    let maxY = theDojo[j].length;
    
    if (x < 0) x = 0;
    if (y < 0) {
        y = 0;
        minY = 0;
    } 

    let totalNinjas = 0;
    // console.log("Clicked!");
    for (x; x<=i+1; x++) {
        // console.log("x= "+x);
        if (x<maxX){
            for (y; y<=j+1; y++) {
                // console.log("  y="+y);
                if (y < maxY)
                    totalNinjas += theDojo[x][y];
                // console.log(totalNinjas)
            }
        }
        y = minY;      
    }

    totalNinjas -= theDojo[i][j];
    console.log("There are "+totalNinjas+" total ninjas in the adjacent squares.");
    if (theDojo[i][j])
        dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    element.innerHTML = totalNinjas;
}

function randomizeDojo(Dojo, xL, yL) {

    totalNinjas = 10;
    var randX = 0;
    var randY = 0;

    for (let x = 0; x < xL; x++) {
        for (let y = 0; y < yL; y++) {
            Dojo[x][y] = 0;
        }
    }
    for (num = 0; (num < xL*yL) && (totalNinjas > 0); num++) {
        randX = Math.floor(Math.random()*10);
        randY = Math.floor(Math.random()*10);
        Dojo[randX][randY] = 1;
        totalNinjas--;
    }
    
    console.log(Dojo);
    return Dojo;
}
    // alert("TODO - determine how many ninjas are hiding in adjacent squares");

    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    


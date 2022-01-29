console.log("Hello from the log!");
var times = 0;

function buttonclicker() {
    times++;
    var header = document.querySelector("#counter");
    header.innerHTML = times;

}
var cardFlip = false;

function clickCard(element) {
    
    if (!cardFlip) {
        element.src = "pokemonGengar.jpg";
        cardFlip = true;
    } else {
        element.src = "pokemonBack.jpg";
        cardFlip = false;
    }

}

function askBtn(element) {
    console.log("You pressed the Ask button.");
}

function startFortune(){
    //change img to animated gif
    //set timeout before calling end fortune
    var image = document.getElementById("magic8ball");
    image.src = "img/8ballShake.gif";
    setTimeout(endFortune, 2000);
}

function endFortune(){
    //place text in answer h1
    //resets img back to static img
    var image = document.getElementById("magic8ball");
    image.src = "img/8ball.png";

}
// you know how many are flipped
// ex. flipped = 10

var cards = []
let flipped = 0
var pile1 = []
var pile2 = []

for (let i = 0; i < 52; i++) {
    cards[i] = Math.round( Math.random() )
    if (cards[i])
        flipped++
}

function count_faces(cards) {
    let countUP = 0
    let countDOWN = 0
    for (let i = 0; i < 52; i++) {
        if (cards[i])
            countUP++
        else
            countDOWN++
    }
    return countUP
}

console.log(cards)
console.log(count_faces(cards))

// function displayCards(cards) {
//     for (let i = 0; i < 52; i++) {
//         if (cards[i])
//             console.log("Face UP")
//         else
//             console.log("Face DOWN")
//     }
// }

// for (let i = 0; i < 52; i++) {
//     pile1[i] = cards[i]
// }



for (let i = 0; i < flipped; i++) {
    if (cards[i]) {
        pile1[i] = 0
    }
    else
        pile1[i] = 1
}


console.log(count_faces(cards))
console.log(count_faces(pile1))
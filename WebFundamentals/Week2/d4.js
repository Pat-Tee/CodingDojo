async function getPokemon(name) {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    var data = await response.json();
    var image = document.getElementById("pkmn");
    // console.log(response);
    // console.log(data);
    // console.log(data.sprites.front_default)
    image.src = data.sprites.front_default;
    image.alt = name;
}

getPokemon("pikachu");

function findPokemon() {
    var pkmnInput = document.getElementById("pkmnInput");
    var name = pkmnInput.value;

    getPokemon(name);
    console.log(name);
}

//-----------------
//d4 algo practices 
//-----------------
// var matrix = [
// [0, 1, 2, 3],  // index 0
// [4, 5, 6, 7],  // index 1
// [8, 9, 10, 11] // index 2
// ]

// function printMatrix(mat) {

//     for (i = 0; i < mat.length; i++) {
//         for (j = 0; j < mat[i].length; j++) {
//             console.log(mat[i][j]);
//         }
//     }
// }

// function flatten(mat) {
//     let flat = [];

//     for (i = 0; i < mat.length; i++) {
//         for (j = 0; j < mat[i].length; j++) {
//             flat.push(mat[i][j]);
//         }
//     }

//     return flat;
// }

// printMatrix(matrix);

// console.log(flatten(matrix));
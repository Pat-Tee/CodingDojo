var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

console.log("Pokemons whose id is divisible by 3:");
console.log("----")
for (let i = 0; i < pokemon.length; i++) {
    if (!(pokemon[i].id % 3)) {
        console.log(pokemon[i]);
    }
}
console.log("----")
console.log("Pokemons who have multiple types:");
console.log("----")
for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types.length > 1) {
        console.log(pokemon[i]);
    }
}
console.log("----")
console.log("Pokemons who have one type: of poison:");
console.log("----")
for (let i = 0; i < pokemon.length; i++) {
    if ((pokemon[i].types.length == 1) && (pokemon[i].types[0] == "poison")) {
        console.log(pokemon[i]);
    }
}

console.log("----")
console.log("Pokemons types that also fly:");
console.log("----")
for (let i = 0; i < pokemon.length; i++) {
    if ((pokemon[i].types.length > 1) && (pokemon[i].types[1] == "flying")) {
        console.log(pokemon[i].types[0]);
    }
}

console.log("----")
console.log(":nosiop fo :epyt eno evah ohw snomekoP")
console.log("----")


for (let i = 0; i < pokemon.length; i++) {
    if ((pokemon[i].types.length == 1) && (pokemon[i].types[0] == "poison")) {
        console.log(reverse(pokemon[i].name));
    }
}

function reverse(str) {
    revStr = "";

    for (let i = 0; i < str.length; i++) {
        revStr[i] = str[i] + revStr;     
        }
        

    return revStr;
}
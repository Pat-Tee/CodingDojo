//first letter capitalized from each word in a string
function acronym(str) {
    let acroStr = "";
    let firstLetter = true;

    for (let i = 0; i< str.length; i++) {

        if (firstLetter == true) {
            acroStr += str[i];
            firstLetter = false;
        }

        if (str[i] === " ")
            if(str[i+1] != " ")
                firstLetter = true;
    }

    return acroStr.toUpperCase();
}
console.log(acronym("thank foodness its grillday"));

//reverse the characters in a string and return it
function revStr(str) {
    newStr = "";
    for (let i =str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(revStr("Thank goodness its Friday"));
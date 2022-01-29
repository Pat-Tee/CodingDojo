const rotateStr = (string, num) => {

    let str="";
    if ( num > string.length )
        num = num % string.length;

    start = string.length - num;

    for (let i = start; i < string.length; i++) {
        str += string[i];
    }

    for (let i = 0; i < start; i++) {
        str += string[i];
    }

    return str;
}

console.log( rotateStr("basketball", 3) ); // will rotate -> "allbasketb"
console.log( rotateStr("okay", 7) );
console.log( rotateStr("hello", 2) );

const isRotated(str1, str2) {
    
}
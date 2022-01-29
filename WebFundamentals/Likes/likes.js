var record = {
    "#neilm": 0,
    "#nicholek": 0,
    "#jimr":0 
};

function likeMore(elmid) {
    record[elmid] ++;
    var elm = document.querySelector(elmid);
    elm.innerHTML = record[elmid];

}
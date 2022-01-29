

function cookieTime() {

    let elm = document.getElementById("alert");

    elm.innerHTML = "";
}

var F = true;

function convertDegrees() {

    let elmHot = document.querySelectorAll(".hot");
    let elmCold = document.querySelectorAll(".cold");
    if (!F) {
        for (var i = 0; i < elmHot.length; i++) {

            let t = elmHot[i].innerHTML;
            t = t*9/5 + 32;
            elmHot[i].innerHTML = Math.round(t);
        }
        F = true;

    } else {
        for (var i = 0; i < elmHot.length; i++) {
            let t = elmHot[i].innerHTML;
            t = (t - 32)*5/9;
            elmHot[i].innerHTML =  Math.round(t);
        }
        F = false;
    }
}

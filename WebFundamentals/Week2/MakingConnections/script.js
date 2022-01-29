console.log("page loaded...");

function editProfile() {
    var profile = document.getElementById("profileName");

    console.log("edit profile clicked ");
    profile.innerHTML = "Johnson Johnson";
}

function removeUser(element) {
    element.innerHTML = "";
    let count = document.querySelector("#userCount");

    count.innerHTML -= 1;

    console.log("user button clicked");
}

function userConnect(add) {

    let elm = document.querySelector("#connections");

    if (add) {
        elm.innerHTML ++;
    } else {
        elm.innerHTML --;
    }

}

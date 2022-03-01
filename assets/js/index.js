const header = document.getElementById("header");
const menuBar = document.getElementById("menuBar");
let heightHeader = header.clientHeight;


menuBar.onclick = function() {
    if (header.clientHeight === heightHeader) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }

}

const menuItem = document.querySelectorAll(".header__navbar-item>a[href*='#']");
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = function() {
        header.style.height = null;
    }
}
var menuison = false;

function menuswitch() 
{
    "use strict";
    if (menuison === true) {
        document.getElementById("menu").style.display = "none";
        menuison = false;
    } 
    else {
        document.getElementById("menu").style.display = "block";
        menuison = true;
    }
}
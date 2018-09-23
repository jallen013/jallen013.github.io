
function desktop() {
    document.getElementById("shieldL").style.display = "block";
    document.getElementById("shieldR").style.display = "block";
    document.getElementById("wideTable").style.display = "block";
    document.getElementById("narrowTable").style.display = "none";
}

function mobile() {
    document.getElementById("shieldL").style.display = "none";
    document.getElementById("shieldR").style.display = "none";
    document.getElementById("wideTable").style.display = "none";
    document.getElementById("narrowTable").style.display = "block";
}


window.addEventListener("load", function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        mobile();
    }
    else
    {
        desktop();
    }
});


window.addEventListener("resize", function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        mobile();
    }
    else
    {				
        if (window.matchMedia("(min-width: 800px)").matches) 		// WIDE
        {
            desktop();
        } 		
        else														// NARROW
        {
    		mobile();
        }
    }
});



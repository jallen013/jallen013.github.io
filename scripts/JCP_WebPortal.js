
function wide(){
    document.getElementById("wideTable").style.display = "block";
    document.getElementById("narrowTable").style.display = "none";
}

function narrow(){
    document.getElementById("wideTable").style.display = "none";
    document.getElementById("narrowTable").style.display = "block";
}


window.addEventListener("load", function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        narrow();
    }
    else
    {
        if (window.matchMedia("(min-width: 750px)").matches) 		// WIDE
        {
    		wide();
        } 		
        else														// NARROW
        {
    		narrow();
        }
    }
});


window.addEventListener("resize", function(){					
    if (window.matchMedia("(min-width: 750px)").matches) 		// WIDE
    {
        wide();
    } 		
    else														// NARROW
    {
		narrow();
    }
});




window.addEventListener("load", function(){
    if (window.matchMedia("(min-width: 700px)").matches) 		// WIDE
    {
		document.getElementById("shield").style.top = "8%";
        document.getElementById("wideTable").style.display = "block";
        document.getElementById("narrowTable").style.display = "none";

    } 		
    else														// NARROW
    {
		document.getElementById("shield").style.top = "8%";
        document.getElementById("wideTable").style.display = "none";
        document.getElementById("narrowTable").style.display = "block";
    }
});


window.addEventListener("resize", function(){					
    if (window.matchMedia("(min-width: 700px)").matches) 		// WIDE
    {
    	document.getElementById("shield").style.top = "8%";
        document.getElementById("wideTable").style.display = "block";
        document.getElementById("narrowTable").style.display = "none";

    } 		
    else														// NARROW
    {
		document.getElementById("shield").style.top = "8%";
        document.getElementById("wideTable").style.display = "none";
        document.getElementById("narrowTable").style.display = "block";
    }
});



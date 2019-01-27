
var widthVar = "(min-width: 770px)";            // change width here <---

window.addEventListener("load", function() {
    if(/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        document.getElementById("wideView").style.display = "none";
        document.getElementById("narrowView").style.display = "block";
    }
    else
    {               
        if (window.matchMedia(widthVar).matches)    
        {
            document.getElementById("wideView").style.display = "block";
            document.getElementById("narrowView").style.display = "none";
        }       
        else                                                        
        {
            document.getElementById("wideView").style.display = "none";
            document.getElementById("narrowView").style.display = "block";
        }
    }
});

window.addEventListener("resize", function() {
    if(/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        document.getElementById("wideView").style.display = "none";
        document.getElementById("narrowView").style.display = "block";
    }
    else
    {               
        if (window.matchMedia(widthVar).matches)
        {
            document.getElementById("wideView").style.display = "block";
            document.getElementById("narrowView").style.display = "none";
        }       
        else                                                        
        {
            document.getElementById("wideView").style.display = "none";
            document.getElementById("narrowView").style.display = "block";
        }
    }
});

//---------------------------------------------------------------------------------------------

function homepage() {
    window.open("https://www.jesuitdallas.org");
}

function bellschedule() {
    window.open("https://www.jesuitdallas.org/students/bell-schedule");
}

function calendar() {
    window.open("https://www.jesuitdallas.org/academics/school-calendar");
}

function moodle() {
    window.open("http://moodle.jesuitcp.org/");
}

function rangernet() {
    window.open("https://2174faweb.blackbaudondemand.com/FAWeb7/forms/Login.aspx");
}

function exchange() {
    window.open("https://login.microsoftonline.com/");
}

function google() {
    window.open("https://accounts.google.com/");
}

function folio() {
    window.open("https://app.foliocollaborative.org/sign_in");
}

function paycom() {
    window.open("https://www.paycomonline.net/v4/cl/cl-login.php");
}

function ptcwizard() {
    window.open("https://jesuitcp.ptcwizard.com/admin/");
}

function exitticket() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeBqQFPFx8K4-NNxbzol2q18qAI7w9c3-4XUnDSQPHh9xZtyw/viewform");
}

function facilities() {
    window.open("https://login.myschoolbuilding.com/msb?acctNum=640813182");
}

function techhelp() {
    window.open("http://techhelp/portal");
}

function roundup() {
    window.open("https://www.jesuitroundup.org");
}

function youtube() {
    window.open("https://www.youtube.com/user/JesuitDallas/");
}

function twitter() {
    window.open("https://twitter.com/jesuitdallas");
}

function facebook() {
    window.open("https://www.facebook.com/jesuitdallas/");
}

function instagram() {
    window.open("https://www.instagram.com/jesuitdallas/");
}




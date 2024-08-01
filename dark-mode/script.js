var toggled = false; 

var toggleTag = document.getElementById("toggle");
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");
var sun = document.getElementById("sun");
var moon = document.getElementById("moon");

document.getElementById("toggle").onclick = function () {
        
    if(!toggled) {
        bodyTag.classList.add("bg-black");
        circle.classList.add("dark-mode");
        toggleTag.classList.remove("bg-black");
        toggleTag.classList.add("bg-white");

        sun.classList.add("hidden");

        setTimeout(() => {
            moon.classList.remove("hidden");
        }, 500);
        
        toggled = true;
    } else {
        bodyTag.classList.remove("bg-black");
        circle.classList.remove("dark-mode");
        toggleTag.classList.add("bg-black");
        toggleTag.classList.remove("bg-white");

        moon.classList.add("hidden");

        setTimeout(() => {
            sun.classList.remove("hidden");
        }, 500);

        toggled = false;
    }
    
}
// Variables
let dayTheme = true;
let volume =  0.2;
let phrase = "RELAX";
let showTime = false;



function Init() {
    HeaderFade();
    if (localStorage.getItem("dayTheme") !== null) {
        dayTheme = (localStorage.getItem("dayTheme") == "true");
        
    }
    if (localStorage.getItem("volume") !== null) {
        volume = localStorage.getItem("volume");
    }
    if (localStorage.getItem("phrase") !== null) {
        phrase = localStorage.getItem("phrase");
    }

    console.log(dayTheme);
    let button = document.getElementById("themeButton");
    if (dayTheme) {
        button.innerHTML = "☽";
        document.getElementById("backgroundVideo").setAttribute("src","assets/videos/beachDay.mp4")
        ChangeCSS("css/styleDay.css",0);
    }
    else {
        button.innerHTML = "☀";
        document.getElementById("backgroundVideo").setAttribute("src","assets/videos/beachNight.mp4")
        ChangeCSS("css/styleNight.css",0);
    }


    document.getElementById("backgroundAudio").volume = volume;
    document.getElementById("volumeSlider").value = volume*100;
    document.getElementById("title").innerHTML = phrase;
}

// Makes header fade out and then remove it.
function HeaderFade() {
    let landing = document.querySelector("header");
    setTimeout(function(){landing.style.opacity = '0'},1500);
    setTimeout(function(){
        landing.remove();
       },1800);
}

function ChangeCSS(cssFile, cssLinkIndex) {
    let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    let newlink = document.createElement("link");

    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}


function SaveToCache() {
    if (typeof(Storage) !== "undefined") { // Supported
        localStorage.setItem("dayTheme",dayTheme);
        localStorage.setItem("volume",volume);
        localStorage.setItem("phrase",phrase);
        console.log(dayTheme);
    }
}

let timeout;
document.onmousemove = function() {
    // show the elements
    clearTimeout(timeout);
    $("#controlPanel").fadeIn();
    $("#themeButton").fadeIn();
    $("#playButton").fadeIn();
    $("#volumeSlider").fadeIn();
    $("#titleForm").fadeIn();
    $("#titleFormTextbox").fadeIn();


    timeout = setTimeout(function(){
        $("#controlPanel").fadeOut();
        $("#themeButton").fadeOut();
        $("#playButton").fadeOut();
        $("#volumeSlider").fadeOut();
        $("#titleForm").fadeOut();
        $("#titleFormTextbox").fadeOut();
    }, 4500);
}

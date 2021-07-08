

function ToggleMusic() {
    let music = document.getElementById("backgroundAudio");
    let button = document.getElementById("playButton");
    if (music.paused) {
        music.play();
        button.innerHTML = "&#9646";

    }
    else {
        music.pause();
        button.innerHTML = "▶";
    }
}

function ToggleTheme() {
    let button = document.getElementById("themeButton");
    dayTheme = !dayTheme;
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


    SaveToCache();
}

function UpdateVolume() {
    let newVolume = document.getElementById("volumeSlider").value / 100.0;
    volume = newVolume;
    let music = document.getElementById("backgroundAudio");
    music.volume = volume;


    SaveToCache();
}

let toggleBtn = document.querySelector("#viewModeToggle");
let toggleText = document.querySelector("#viewMode");
let visitorTexts = document.querySelectorAll(".containerYou");
let sections = document.querySelectorAll(".containerWilliam");
let images = document.querySelectorAll(".imgContainer");
// Toggle the toggle button state on load
function LoadToggle(){
    // Check if there is localStorage for the togglestate
    if (localStorage.toggleState === "true"){
        toggleText.style.color = "#0d91d8";
        toggleBtn.checked = true;
    }
    else {
    // If localStorage doesn't have data stored, store it.
        localStorage.toggleState = false;
        toggleText.style.color = "#636363";
        toggleBtn.checked = false;
    }
    // data content if needed
    SwapContent();
}

// update the toggle button state on click
function UpdateToggle(){
    toggleBtn.checked ? toggleText.style.color = "#0d91d8" :
                        toggleText.style.color = "#636363";
    localStorage.toggleState = toggleBtn.checked;
    SwapContent();
}   

function SwapContent(){
    // If switch is on, swap content.
    if (!toggleBtn.checked){
        for (let i = 0; i < visitorTexts.length; i++){
            visitorTexts[i].style.display = "none";
        }
        for (let j = 0; j < sections.length; j++){
            sections[j].style.textAlign = "center";
        }
        for (let k = 0; k < images.length; k++){
            images[k].style.textAlign = "center";
        }
    }
    else{
        for (let i = 0; i < visitorTexts.length; i++){
            visitorTexts[i].style.display = "block";
        }
        for (let j = 0; j < sections.length; j++){
            sections[j].style.textAlign = "left";
        }
        for (let k = 0; k < images.length; k++){
            images[k].style.textAlign = "left";
        }
    }
}
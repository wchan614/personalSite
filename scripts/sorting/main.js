// William Chan 2020

let titleObj = document.querySelector("#contentTitle");
let infoObj = document.querySelector("#contentBody");
let content = new Content(titleObj,infoObj);
window.onresize =  Refresh;
let lastSelected = null;

// Run this Init() when body loads
function Init() {
    HeaderFade();

    let menuSelect = document.querySelector("#menuSelectContainer");
    let randomData = document.querySelector("#randomData");
    randomData.checked = true;

    // Make the algorithms options
    for (let i = 0; i < ALGORITHMS.length; i++) {
        let option = document.createElement("div");
        let optionText = document.createElement("p");
        option.className = "menuSelection";
        option.id = "#"+ALGORITHMS[i];
        option.name = ALGORITHMS[i];
        option.onclick = function() {ToggleContent(option)};
        optionText.innerHTML = ALGORITHMS[i] + " SORT";
        option.appendChild(optionText);
        menuSelect.appendChild(option);
    }
}

// Makes header fade out and then remove it.
function HeaderFade() {
    let landing = document.querySelector("header");
    setTimeout(function(){landing.style.opacity = '0'},1500);
    setTimeout(function(){
        landing.remove();
        LoadMenu();},1800);
}

// Show the menu
function LoadMenu() { 
    let menu = document.querySelector("#menuContainer");
    setTimeout(function() {
        menu.style.opacity = '1';
    }, 200);
}

// On click function for the selection, toggles whats been selected and loads things appropriately.
function ToggleContent(selection) {
    content.stopSort();
    let contentContainer = document.querySelector("#contentContainer");
    selection.classList.toggle("menuSelected");

    if (lastSelected === null){
        contentContainer.style.opacity = "1";
        content.load(selection);
    }
    else if (lastSelected != selection){
        contentContainer.style.opacity = "1";
        lastSelected.classList.toggle("menuSelected");
        content.unload();
        content.load(selection);
    }
    else if (lastSelected === selection) {
        contentContainer.style.opacity = "0";
        lastSelected = null;
        content.unload();
        return;
    }
    lastSelected = selection;
}

// Returns the respective algorithm that belongs to the selection object
function GetAlgoInfo(selection) {
    return algorithmData[selection.name.toLowerCase()];
}

// Starts sorting the content
function StartSort() { 
    window.requestAnimationFrame((t) => content.startSort(t));
}

// Refresh the canvas
function Refresh() {
    let contentContainer = document.querySelector("#contentContainer");
    if (window.getComputedStyle(contentContainer).getPropertyValue("opacity") === "1") {
        content.refresh();
    }
}

// Update the canvas with the new data size
function UpdateDataSize() {
    let sizeSlider = document.querySelector("#sizeSlider");
    DATASIZE = parseInt(sizeSlider.value);
    
    content.updateSize();
    content.reload();
}

// Update the canvas with the new data formatted
function ToggleDataFormat() {
    let dataFormats = document.querySelectorAll("#dataFormatter > input");

    if (dataFormats[0].checked){
        content.setScrambleType("random");
    }
    else if (dataFormats[1].checked){
        content.setScrambleType("reversed");
    }
    else if (dataFormats[2].checked){
        content.setScrambleType("nearly");
    }

    content.reload();
}

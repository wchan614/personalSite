let xDim; // int
let yDim; // int
let canvas; //  canvas obj
let screen; // canvas context obj
let raindrops =  []; // array of rain obj
let characters = []; // array of usable characters
const FONT_SIZE = 18;
const NCHARS =  1500;
/*
PLAN:
 MAKE AS MANY RAINDROPS THAT CAN FIT THE SCREEN WIDTH INTO ARRAY 
 RUN THROUGH EACH RAINDROP IN ARRAY PER FRAME AND TELL TO UPDATE 

    TO TELL EACH Raindrop TO UPDATE, CALL .update() SO
    IT CAN UPDATE ITSELF ON THE SCREEN.
*/

// INIT
function Init() {
    // Set values
    xDim = window.innerWidth;
    yDim = window.innerHeight;
    canvas = document.querySelector("#canvas");
    canvas.height = yDim;
    canvas.width = xDim;
    screen = canvas.getContext('2d');
    screen.font = FONT_SIZE+"px serif";

    // Generate characters we will be using
    for (let i = 0; i < NCHARS; i++){
        characters.push(MakeCharacter());
    }

    // Generate the rain objects into raindrops
    for (let i = 0; i < Math.floor(xDim/FONT_SIZE); i++){
        let rain = new Raindrop(i,i*FONT_SIZE,-FONT_SIZE);
        raindrops.push(rain);
    }

    Start();
}

// Start the animation
function Start() {
    window.requestAnimationFrame(function(){
        UpdateRain(raindrops)
    });
}

// Update the screen
function UpdateRain(raindrops) {
    screen.clearRect(0,0,xDim,yDim); // Clear Screen
    for (let i = 0; i < raindrops.length; i++){ //Call update on all raindrops
        raindrops[i].update(); 
    }
    
    window.requestAnimationFrame(function(){ // Redraw
        setTimeout(UpdateRain,12,raindrops);
    });
}

// Randomly generate unicode from START to START+NCHARS
function MakeCharacter() {
    const START = 18000; // start of unicode in decimal
    let text = (START + Math.floor(Math.random()*NCHARS)).toString(16);  
    return String.fromCharCode(parseInt(text,16));
}

// Create array of hexadecimal strings of n sections with matrix colour scheme 
function MakeGradient(sections) {
    const START = 250; // FA green value in hexadecimal
    let step = Math.floor(START/sections);
    let gradients = [];

    for (let i = START; i > 0; i -= step){
        let val = Math.floor(i);
        let green = "#00" + PadNum(val.toString(16),2) + "00"; // pad hexadecimal incase of small value
        step *= 1.0125; // Exponential gradient here vs linear
        gradients.push(green);
    }

    // first 2 elements to be whiteish green for matrix theme
    gradients[0] = "#aaffaa";
    gradients[1] = "#33ee33";
    return gradients;
}

// Pad number with n leading 0's
function PadNum(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(0) + n;
}

// Toggles the colour of the screen between green and red
function ToggleFilter(){
    canvas.classList.toggle("filter");
}
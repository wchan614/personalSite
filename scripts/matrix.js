let xDim; // int
let yDim; // int
let canvas; //  canvas obj
let screen; // canvas context obj
let raindrops =  []; // array of rain obj
let characters = []; // array of usable characters
const FONT_SIZE = 18;
const NCHARS =  1500;

// Raindrop Class
class Raindrop {
    constructor(id,x,y) { 
        this.id = id; // Num
        this.water = []; // array of unicode 
        this.colors = []; // array of colors, varying with length intensity
        this.pos = [x,y]; // x,y pair of the head of the Raindrop
        this.charIndex = 0; // index for head to display
        this.frontIndex = 0;
        this.lastIndex = 0;
        this.reset();
        this.delay = 0; // init delay back to 0 for all to start falling at first;
    }   

    // Draws the raindrop on the screen
    update() {
        if (this.delay <= 0){ // Force a delay before refalling
            if (this.getLastYPos()+FONT_SIZE > yDim) // reset raindrop to top if out of bounds
                this.reset();
              
            // Loop through and draw everything from the water array 
            for (let i = 0; i < this.getLength(); i++){ 
                screen.fillStyle = this.colors[i]; 
                this.glitch(i);
                screen.fillText(this.water[this.lastIndex-i],this.pos[0],this.pos[1] - i*FONT_SIZE);
            }

            // Update indexes and get new character
            this.water.push(characters[this.charIndex]);
            this.charIndex++;
            this.charIndex %= NCHARS;
            this.frontIndex++;
            this.lastIndex++;
            this.pos[1] += FONT_SIZE-1;
        }

        else{ // Wait
            this.delay--;
        }
    }

    // Reset and reinstates the values of the raindrop
    reset() { 
        let len = 70 + Math.floor(Math.random()*5);
        this.water = [];

        for (let i = 0; i < len; i++){
            let index = (this.charIndex + i) % NCHARS;
            this.water.push(characters[index]);
        }  

        this.charIndex = Math.floor(Math.random()*NCHARS);
        this.frontIndex = 0;
        this.lastIndex = len-1;
        this.charIndex = (this.charIndex + this.getLength()) % NCHARS;
        this.colors = MakeGradient(this.getLength());
        this.delay = Math.floor(Math.random()*200) - 33;
        this.pos[1] = -FONT_SIZE;
    }

    // Pesudo-random replacement of characters in the raindrop
    glitch(n) {
        if (n === this.charIndex % this.lastIndex )
            this.water[this.lastIndex-n] = characters[(this.charIndex+this.getLength())%1000];
    }

    // Return length of the raindrop
    getLength() {
        return this.lastIndex - this.frontIndex;
    }

    // Return last character Y position relative to the screen in pixels for the raindrop.
    getLastYPos() {
        return this.pos[1] - FONT_SIZE*this.getLength();
    }   

    // Debugger
    debug() {
        console.log(this.id,this.water,this.colors,
            this.pos,this.delay,this.charIndex,
            this.frontIndex,this.lastIndex);
    }
}

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
        let green = "#00"+PadNum(val.toString(16),2)+"00"; // pad hexadecimal incase of small value
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
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

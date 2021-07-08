// William Chan 2020

// Content class for the content panel on the right side
class Content {
    constructor(titleObj, infoObj) {
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext('2d');
        this.title = titleObj;
        this.info = infoObj;
        this.arr = [];
        this.algorithm;
        this.animationTimeout;
        this.running = false;
        this.selected = null;
        this.shuffle;
        this.setScrambleType("random");

        // Create internal structure for sorting data
        for( let i = 0; i < DATASIZE; i++ ) {
            this.arr.push(i+1);
        }
    }
    
    // Stop sorting and updates the size of the data to be sorted
    updateSize() {
        this.stopSort();
        this.initGraph();
    }

    // Reloads the algorithms to begin again
    reload() {
        if (this.selected)
            this.load(this.selected);
    }

    // Stop sorting and unload the algorithm, content data, canvas
    unload() {
        this.title.innerHTML = "";
        this.info.innerHTML = "";
        let display = document.querySelector("#contentDisplay");
        this.canvas.width = display.clientWidth * 0.98;
        this.canvas.height = display.clientHeight - 5;

        let cw = this.canvas.width;
        let ch = this.canvas.height;
        this.ctx.clearRect( 0, 0, cw, ch );
        this.stopSort();
    }

    // Load in a new algorithm with respective data, and information.
    load(selectionObj) {
        this.selected = selectionObj;
        this.stopSort();
        this.title.innerHTML = selectionObj.name + " SORT";
        let info = GetAlgoInfo(selectionObj);
        let toAdd = "";


        if( this.animationTimeout ) {
            clearTimeout( this.animationTimeout );
        }

        switch(selectionObj.name) {
            case "INSERTION":
                this.algorithm = new Insertion();
                this.initGraph()
                break;

            case "SELECTION":
                this.algorithm = new Selection();
                this.initGraph()
                break;

            case "BUBBLE":
                this.algorithm = new Bubble();
                this.initGraph()
                break;

            case "QUICK":
                this.algorithm = new Quick();
                this.initGraph()
                break;

            default:
                break;
        }
        toAdd += info[0]+info[1]+info[2]+info[3];
        this.info.innerHTML = toAdd;
    }

    // Remakes the internal structure, and shuffle the data based on selection
    // TODO: varying unsortedness
    initGraph() {
        this.arr = [];
        for( let i = 0; i < DATASIZE; i++ ) {
            this.arr.push(i+1);
        }
        
        this.shuffle(this.arr);
        this.draw();
    }

    // Draws the canvas based on the internal structure.
    draw(state) {
        // Set canvas size and clear screen.
        let display = document.querySelector("#contentDisplay");
        this.canvas.width = display.clientWidth * 0.98;
        this.canvas.height = display.clientHeight - 5;

        let cw = this.canvas.width;
        let ch = this.canvas.height;
        this.ctx.clearRect(0, 0, cw, ch);
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        let bar_w = cw / this.arr.length;

        // Draw base graph
        for(let i = 0; i < this.arr.length; i++) {
            let bar_h = this.arr[i] * (ch / this.arr.length);
            this.ctx.fillRect(i * bar_w, ch - bar_h, bar_w, bar_h);
        }

        // Draw black index bars
        if(state) {
            this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            state.forEach((i) => {
                let bar_h = this.arr[i] * (ch / this.arr.length);
                this.ctx.fillRect(i * bar_w, ch - bar_h, bar_w, bar_h);
            });
        }
    }

    // Start sorting data with respective algorithm
    startSort() {
        if(!this.running) {
            this.running = true;
            this.animationInterval = setInterval(() => window.requestAnimationFrame(() => this.doStep()), SECONDS_PER_STEP * 1000);
        }
    }

    // Stops sorting data
    stopSort() {
        this.running = false;
        if(this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
        }
    }

    // Do one step of the currently loaded algorithm
    doStep() {
        if (this.running) {
            let state = this.algorithm.step(this.arr);
            this.draw(state);
            
            // Print swaps and comparsions if algorithm is done
            if (this.algorithm.done) {
                this.stopSort();
                this.ctx.font = "20px Arial";
                this.ctx.fillStyle = "#000";
                this.ctx.fillText(`Swaps: ${this.algorithm.swaps}  Comparisons: ${this.algorithm.comparisons}`,20,20);
            }
        }
    }

    // Refresh the screen
    refresh() {
        let contentContainer = document.querySelector("#contentContainer");
        let opacity = window.getComputedStyle(contentContainer).getPropertyValue("opacity");
        if (opacity === "1" && (this.algorithm.done || !this.algorithm.being )) {
            this.draw();
        }
    }

    // Set the scramble type of the data 
    setScrambleType(mode) {
        switch(mode) {
            case "random":
                this.shuffle = (arr) => {
                    for( let i = 0; i < DATASIZE * 2; i++ ) {
                        let a = Math.floor(Math.random() * DATASIZE);
                        let b = Math.floor(Math.random() * DATASIZE);
                        [arr[a], arr[b]] = [arr[b], arr[a]]; // swap random index
                    }
                };
                break;

            case "reversed":
                this.shuffle = (arr) => {
                    arr.sort((a,b) => b - a);
                };
                break;

            case "nearly":
                this.shuffle = (arr) => {
                    // swap these two index in case for loop doesnt permute for small arrays
                    [arr[0], arr[2]] = [arr[2], arr[0]]; 
                    for( let i = 0; i < arr.length - 1; i++ ) {
                        if( Math.random() >= 0.92 ) { // small chance to permute
                            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                        }
                    }
                };
                break;

            default:
                // unreachable
                throw new Error("0xdeadbeef");
                break;
        }
    }
}

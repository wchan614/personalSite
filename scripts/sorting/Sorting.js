// William Chan 2020

const ALGORITHMS = ["INSERTION", "SELECTION", "BUBBLE", "QUICK"];
//TODO: "HEAP","MERGE","BOGO","COUNTING","RADIX","BUCKET"];

let DATASIZE = 50;
let SECONDS_PER_STEP = 0.075;

// Sorting base class
class Sorting {
    constructor() {
        this.done = false;
        this.begin = false;
        this.swaps = 0;
        this.comparisons = 0;
    }

    swap(arr, i, j) {
        this.swaps++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // abstract class, each class need to implement step
    step(arr) {
        // unreachable
        throw new Error("0xdeadbeef");
    }
}

// Extend from Sorting
class Insertion extends Sorting {
    constructor() {
        super();
        this.i = 1;
        this.j = this.i;
    }

    compare(arr, i, j) {
        this.comparisons += 1;
        if (arr[i] > arr[j]) {
            super.swap(arr, i, j);
            return true;
        }
        return false;
    }

    // One step of the algorithm
    step(arr) {
        this.begin = true;
        let swapped = [];
        if (this.j <= 0) {
            this.j = ++this.i;
        }

        // done sorting
        if (this.i == arr.length) {
            this.done = true;
            return [this.i - 1];
        }

        // comparing two algorithms
        if (this.compare(arr, this.j - 1, this.j)) {
            swapped = [this.j - 1, this.j];
        }
        else { // body of the algorithm
            this.j = ++this.i;
            while (!this.compare(arr, this.j - 1, this.j)) {
                this.j -= 1;
                if (this.j <= 0) {
                    this.j = ++this.i;
                }
                if (this.i == arr.length) {
                    this.done = true;
                    return [this.i - 1];
                }
            }
            swapped = [this.j - 1, this.j];
        }
        this.j--;
        return swapped;
    }
}

// Extend from Sorting
class Selection extends Sorting {
    constructor() {
        super();
        this.i = 0;
        this.j = this.i + 1;
        this.minIdx = this.i;
    }

    compare(arr, i) {
        this.comparisons++;
        if (arr[i] < arr[this.minIdx]) {
            this.minIdx = i;
        }
    }

    // One step of the algorithm
    step(arr) {
        this.begin = true;
        let swapped = [];
        if (this.j >= arr.length) {
            this.j = ++this.i + 1;
            this.minIdx = this.i;
        }

        // done sorting
        if (this.i >= arr.length - 1) {
            this.done = true;
            return [this.i];
        }

        // while we still need to compare
        while (this.j < arr.length) {
            this.compare(arr, this.j);
            this.j++;
        }

        // swap
        if (this.minIdx != this.i) {
            super.swap(arr, this.i, this.minIdx);
            swapped = [this.i, this.minIdx];
        }
        else {
            return this.step(arr);
        }

        return swapped;
    }
}

// Extend from Sorting
class Bubble extends Sorting {
    constructor() {
        super();
        this.i = 0;
        this.max = -1;
    }

    compare(arr, i) {
        this.comparisons++;
        return (arr[i] < arr[i + 1]);
    }

    // One step of the algorithm
    step(arr) {
        this.begin = true;
        // max so far
        if (this.max == -1) {
            this.max = arr.length - 1;
        }

        // done sorting
        if (this.max <= 0) {
            this.done = true;
            return [0];
        }

        // reset max
        if (this.i == this.max) {
            this.i = 0;
            this.max--;
        }

        // compare function
        if (!this.compare(arr, this.i)) {
            super.swap(arr, this.i, this.i + 1);
            this.i++;
            return [this.i - 1, this.i];
        }
        else {
            this.i++;
            return this.step(arr);
        }
    }
}

class Quick extends Sorting {
    constructor() {
        super();
        this.queue = [[0, DATASIZE - 1]];
        this.state = {};
    }

    step(arr) {
        this.begin = true;
        // Queue
        if (Object.keys(this.state).length == 0) {
            if (this.queue.length == 0) {
                this.done = true;
                return [arr.length - 1];
            }

            [this.state.lo, this.state.hi] = this.queue.pop();
            this.state.pivot = arr[Math.floor((this.state.hi + this.state.lo) / 2)];
            this.state.i = this.state.lo - 1;
            this.state.j = this.state.hi + 1;

            if (this.state.lo >= this.state.hi) {
                let out = [this.state.lo];
                this.state = {};
                return this.step(arr);
            }
        }
        // Comparsion
        do {
            this.state.i++;
            this.comparisons++;
        } while (arr[this.state.i] < this.state.pivot);
        do {
            this.state.j--;
            this.comparisons++;
        } while (arr[this.state.j] > this.state.pivot);
        if (this.state.i >= this.state.j) {
            this.queue.push([this.state.j + 1, this.state.hi], [this.state.lo, this.state.j]);
            this.state = {};
            return this.step(arr);
        }
        super.swap(arr, this.state.i, this.state.j);
        return [this.state.i, this.state.j];
    }
}

// To implement below at a later time /////////////////////////
class Heap extends Sorting {
    constructor() {
        super();
        this.done = true;
    }
}

class Merge extends Sorting {
    constructor() {
        super();
        this.done = true;
    }
}

class Bogo extends Sorting {
    constructor() {
        super();
        this.done = true;
    }
}

class Counting extends Sorting {
    constructor() {
        super();
        this.done = true;
    }
}

class Radix extends Sorting {
    constructor() {
        super();
        this.done = true;
    }
}

class Bucket extends Sorting {
    constructor() {
        super();
        this.done = true;
    }
} 

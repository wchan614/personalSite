
const POINT = function(x, y, z) {
    this.x = x; 
    this.y = y; 
    this.z = z; 
};

const COLOR_CUBE = "#FFFFFF";
const SPEED_X = -0.05; 
const SPEED_Y = -0.13;
const SPEED_Z = 0.07; 

let canvas = document.getElementById("cubeCanvas");
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");


canvas.height = 300;
canvas.width = 300;

h = canvas.height;
w = canvas.width;
// colours and lines
ctx.lineWidth = w / 120;
ctx.lineCap = "round";
ctx.fillStyle = "#00000000";
ctx.strokeStyle = COLOR_CUBE;
// cube parameters
let cx = w / 2;
let cy = h / 2;
let cz = 0;
let size = h / 4;
let vertices = [
    new POINT(cx - size, cy - size, cz - size),
    new POINT(cx + size, cy - size, cz - size),
    new POINT(cx + size, cy + size, cz - size),
    new POINT(cx - size, cy + size, cz - size),
    new POINT(cx - size, cy - size, cz + size),
    new POINT(cx + size, cy - size, cz + size),
    new POINT(cx + size, cy + size, cz + size),
    new POINT(cx - size, cy + size, cz + size)
];
let edges = [
    [0, 1], [1, 2], [2, 3], [3, 0], // back face
    [4, 5], [5, 6], [6, 7], [7, 4], // front face
    [0, 4], [1, 5], [2, 6], [3, 7] // connecting sides
];

// set up the animation loop
let dT, timeLast = 0;

requestAnimationFrame(Loop);

function Loop(timeNow) {

    // calculate the time difference
    dT = timeNow - timeLast;
    timeLast = timeNow;

    // background
    ctx.clearRect(0, 0, w, h);

    // rotate z axis
    let angle = dT * 0.001 * SPEED_Z * Math.PI * 2;
    for (let v of vertices) {
        let dx = v.x - cx;
        let dy = v.y - cy;
        let x = dx * Math.cos(angle) - dy * Math.sin(angle);
        let y = dx * Math.sin(angle) + dy * Math.cos(angle);
        v.x = x + cx;
        v.y = y + cy;
    }

    // rotate x axis
    angle = dT * 0.001 * SPEED_X * Math.PI * 2;
    for (let v of vertices) {
        let dy = v.y - cy;
        let dz = v.z - cz;
        let y = dy * Math.cos(angle) - dz * Math.sin(angle);
        let z = dy * Math.sin(angle) + dz * Math.cos(angle);
        v.y = y + cy;
        v.z = z + cz;
    }

    // rotate y axis
    angle = dT * 0.001 * SPEED_Y * Math.PI * 2;
    for (let v of vertices) {
        let dx = v.x - cx;
        let dz = v.z - cz;
        let x = dz * Math.sin(angle) + dx * Math.cos(angle);
        let z = dz * Math.cos(angle) - dx * Math.sin(angle);
        v.x = x + cx;
        v.z = z + cz;
    }

    // draw each edge
    for (let edge of edges) {
        ctx.beginPath();
        ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
        ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
        ctx.stroke();
    }

    // call the next frame
    requestAnimationFrame(Loop);
    
}

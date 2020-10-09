const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;
// context.globalCompositeOperation = 'multipy'; // cox I didn't like it

let isDrawing = false;
// Starting points whenever you start to draw again
let X = 0;
let Y = 0;
let hue = 0;
let direction = true;

function draw(event) {
    if (!isDrawing) return; // to not print anything when we are not drawing
    console.log(event);
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`; // hue, saturation, lightness
    // context.lineWidth = hue;
    context.beginPath();
    // Starting Point
    context.moveTo(X, Y);
    // Where to go
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    // Updates the last visited points
    [X, Y] = [event.offsetX, event.offsetY];
    hue++; // keeps incrementing hue
    if (hue >= 300)
        hue = 0;
    if (context.lineWidth >= 150 || context.lineWidth <= 1)
        direction = !direction;
    if (direction)
        context.lineWidth++;
    else
        context.lineWidth--;
}

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    // Update starting points to wherever we click to start drawing
    [X, Y] = [event.offSetX, event.offSetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// Mother-effing hsl for rainbow effect
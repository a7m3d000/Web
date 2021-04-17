// Variables
var c = document.getElementById("my-canvas"),
    body = document.body
    ctx = c.getContext("2d"),
    fullCircle = 2 * Math.PI;

// Position Style
c.style.margin = "130px 570px";

// Background 
ctx.fillStyle = "transparent";
ctx.fillRect(0, 0, c.clientWidth, c.height)

// Main Face
ctx.beginPath();
ctx.fillStyle = "#ff0";
ctx.arc(350, 350, 330, 0, fullCircle);
ctx.fill();

// Mouth
ctx.beginPath();
ctx.strokeStyle = "#000";
ctx.lineWidth = 10;
ctx.arc(350, 350, 250, 0, 0.5 * fullCircle);
ctx.stroke();

// Aye one
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.lineWidth = 0;
ctx.arc(250, 230, 50, 0, fullCircle);
ctx.fill();

// Aye Two
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.lineWidth = 0;
ctx.arc(450, 230, 50, 0, fullCircle);
ctx.fill();


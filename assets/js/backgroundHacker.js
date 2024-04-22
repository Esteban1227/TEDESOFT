const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const W = window.innerWidth;
const H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var fontSize = 16;
var columns = Math.floor(W / fontSize);
var drops = [];
for (let i = 0; i < columns; i++) {
  drops.push(0);
}
var str = "JavaScript Hacking Effect";
function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, W, H);
  context.fontSize = "700 " + fontSize + "px";
  context.fillStyle = "#00cc33";
  for (var i = 0; i < columns; i++) {
    var index = Math.floor(Math.random() * str.length);
    var x = i * fontSize;
    var y = drops[i] * fontSize;
    context.fillText(str[index], x, y);
    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
draw();
setInterval(draw, 35);
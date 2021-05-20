// Variables
var c = document.getElementById("my-canvas"),
    ctx = c.getContext("2d"),
    h = c.height,
    w = c.width,
    styleX = 330,
    styleY = 350,
    styleWith = 60;
    styleHegiht = 50;
    colors = ["#d35400", "#16a085", "#8e44ad", "#c0392b", "#27ae60", "#2c3e50"],
    text = ["1", "2", "3", "4", "5", "6"]
    fontSpace = 70;

// Style Loop
for (const color of colors) {
    ctx.fillStyle = color;
    ctx.fillRect(styleX, styleY, styleWith, h - styleHegiht);
    styleX += 100;
    styleY += 50;
    styleHegiht += 50;

    ctx.font = "25px Tahoma";
    ctx.fillStyle = "#FFF";
}

// Font Loop
for (const font of text) {
    ctx.fillText(font, fontSpace*5.04, h - 15);
    fontSpace += 20

}

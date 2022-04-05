let colors = [{
  "bg": "ghostwhite",
  "txt": "slateblue"
}, {
  "bg": "whitesmoke",
  "txt": "black"
}, {
  "bg": "azure",
  "txt": "skyblue"
}, {
  "bg": "beige",
  "txt": "burlywood"
}, {
  "bg": "honeydew",
  "txt": "darkolivegreen"
}, {
  "bg": "antiquewhite",
  "txt": "indianred"
}, {
  "bg": "lavender",
  "txt": "purple"
}];
let x = 1;

setInterval(
function () {
  document.body.style.backgroundColor = colors[x].bg;
  document.body.style.color = colors[x].txt;
  document.getElementById('buttonText').style.color = colors[x].txt;
  document.getElementById('buttonStroke').style.stroke = colors[x].txt;
  document.getElementById('m1').style.backgroundColor = colors[x].txt;
  document.getElementById('m2').style.backgroundColor = colors[x].txt;
  document.getElementById('m3').style.backgroundColor = colors[x].txt;
  document.getElementById('m4').style.backgroundColor = colors[x].txt;
  if (x == colors.length - 1) x = 0;
  else x++;
},2500);

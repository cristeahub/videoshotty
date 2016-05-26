var video = document.querySelectorAll("video")[0];

var width = 640;
var height = 480;

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width  = width;
canvas.height = height;

document.body.appendChild(canvas);

requestAnimationFrame(function renderLoop() {
  ctx.drawImage(video, 0, 0, width, height);
  var imageData = ctx.getImageData(0, 0, width, height);

  requestAnimationFrame(renderLoop);
});

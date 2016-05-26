var video = document.querySelectorAll("video")[0];

var width = 640;
var height = 480;

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width  = width;
canvas.height = height;

document.body.appendChild(canvas);

var FRAMES_TO_CAPTURE = 60 * 10;
var frames = [];
frames.length = FRAMES_TO_CAPTURE;

var current_frame = 0;
requestAnimationFrame(function renderLoop() {
  ctx.drawImage(video, 0, 0, width, height);
  var imageData = ctx.getImageData(0, 0, width, height);
  frames[current_frame % FRAMES_TO_CAPTURE] = imageData;
  current_frame += 1;

  requestAnimationFrame(renderLoop);
});

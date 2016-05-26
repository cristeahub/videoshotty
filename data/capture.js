var video = document.querySelectorAll("video")[0];

var TARGET_WIDTH = 640;
var scale = TARGET_WIDTH / video.clientWidth;

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width  = video.clientWidth * scale;
canvas.height = video.clientHeight * scale;

document.body.appendChild(canvas);

var FRAMES_TO_CAPTURE = 60 * 10;
var frames = [];
frames.length = FRAMES_TO_CAPTURE;

var current_frame = 0;
requestAnimationFrame(function renderLoop() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  frames[current_frame % FRAMES_TO_CAPTURE] = imageData;
  current_frame += 1;

  requestAnimationFrame(renderLoop);
});


var GIF = require('gifjs/gif.js');

function createGifFromImageData(data) {
  var gif = new GIF({
    workers: 2,
    quality: 10
  });

  for(int i = 0; i < data.length; i++) {
    gif.addFrame(data[i]);
  }

  gif.on('finished', function() {
    console.log('we are done creating your gif');
  });

  gif.on('progress', function(p) {
    console.log(p);
  });

  gif.render();
}

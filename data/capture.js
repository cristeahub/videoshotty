var TARGET_WIDTH = 640;

self.port.on("bindListeners", function(tag) {
  var videoElements = document.querySelectorAll("video");
  [].forEach.call(videoElements, function(element) {
    bindGifferToVideoElement(element);
  });
});

function bindGifferToVideoElement(videoElement) {
  var scale = TARGET_WIDTH / videoElement.clientWidth;

  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width  = videoElement.clientWidth * scale;
  canvas.height = videoElement.clientHeight * scale;

  var FRAMES_TO_CAPTURE = 60 * 10;
  var frames = [];
  frames.length = FRAMES_TO_CAPTURE;

  var current_frame = 0;
  requestAnimationFrame(function renderLoop() {
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    frames[current_frame % FRAMES_TO_CAPTURE] = imageData;
    current_frame += 1;

    requestAnimationFrame(renderLoop);
  });

  var element = document.createElement('a');
  element.textContent = "Capture";
  element.style.padding = "10px";
  element.style.margin = "5px";
  element.style.background = "#e7832a";
  element.style.zIndex = 42424242;
  element.style.position = "relative";
  element.style.display = "inline-block";
  element.style.fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif';
  element.style.cursor = "pointer";

  element.addEventListener('click', function() {
    console.log("STUFUAIFOUAOIFU");
  });

  videoElement.parentElement.appendChild(element);
}

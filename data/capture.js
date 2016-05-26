var TARGET_WIDTH = 360;

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
  document.body.appendChild(canvas);

  var FRAMES_TO_CAPTURE = 60;
  var frames = Array(FRAMES_TO_CAPTURE);

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

  element.addEventListener('click', function() {
    openModal();
  });

  videoElement.parentElement.appendChild(element);
}

function getOverlayString(callback) {
  callback('Hello!');
}

console.log('yolo');

function captureGif(frames, startFrame, width, height){
  console.log('capture');
  getOverlayString(function(text) {
    console.log('composite', text);
    var imageDataBuffer = [];
    for (var i = 0; i < frames.length; i++) {
      console.log('loop');
      var compositeCanvas = document.createElement('canvas');
      var compositeCtx = compositeCanvas.getContext('2d');
      compositeCanvas.width = width;
      compositeCanvas.height = height;
      var frameIndex = (startFrame + i + 1) % frames.length;
      console.log('index', frameIndex);
      compositeCtx.putImageData(frames[frameIndex], 0, 0);
      addTextOverlay(compositeCtx, text, width, height);
      imageDataBuffer.push(compositeCtx.getImageData(0, 0, width, height));
    }
    console.log('gif created', imageDataBuffer.length);
    var file = encodeGif(imageDataBuffer, width, height);
    var data_url = 'data:image/gif;base64,'+encode64(file);
    var img = document.createElement('img');
    img.src=data_url;
    document.body.appendChild(img);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '//54.229.214.117/upload', true);
    xhr.onload = function(e) {
      console.log('uploading');
    };
    xhr.send(file);
  });
}

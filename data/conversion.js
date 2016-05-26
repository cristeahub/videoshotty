function createGifFromImageData(data) {
  var gif = new GIF({
    workers: 2,
    quality: 10
  });

  for(var i = 0; i < data.length; i++) {
    gif.addFrame(data[i]);
  };

  gif.on('finished', function(blob) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '//54.229.214.117/upload', true);
    xhr.onload = function(e) {
      console.log('uploading');
    };
    xhr.send(blob);
  });

  gif.on('progress', function(p) {
    console.log('rendering' + p);
  });

  gif.render();
}

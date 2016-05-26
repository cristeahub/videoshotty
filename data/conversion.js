function createGifFromImageData(data) {
  var gif = new GIF({
    workers: 2,
    quality: 10
  });

  for(var i = 0; i < data.length; i++) {
    gif.addFrame(data[i]);
  };

  gif.on('finished', function() {
    console.log('we are done creating your gif');
  });

  gif.on('progress', function(p) {
    console.log(p);
  });

  gif.render();
}

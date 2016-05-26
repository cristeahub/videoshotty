var buttons = require('sdk/ui/button/action');
var pageMod = require("sdk/page-mod");

worker = null

pageMod.PageMod({
  include: '*',
  contentScriptFile: [
    "./capture.js", "./textOverlay.js", "./conversion.js",
    "./modal.js", "./LZWEncoder.js", "./NeuQuant.js", "./GIFEncoder.js", "./b64.js"],
  onAttach: function(_worker) {
    // Apparently there's one of these per tab,
    // so should probably be stored in a hashmap or something
    worker = _worker
  }
});

var button = buttons.ActionButton({
  id: "videoshotty-toolbar-button",
  label: "Videoshotty!",
  icon: {
    "16": "./videoshotty-16.png",
    "32": "./videoshotty-32.png",
    "64": "./videoshotty-64.png"
  },
  onClick: function() {
    worker.port.emit("bindListeners");
  }
});

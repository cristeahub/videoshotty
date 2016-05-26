var buttons = require('sdk/ui/button/action');
var pageMod = require("sdk/page-mod");

var button = buttons.ActionButton({
  id: "videoshotty-toolbar-button",
  label: "Videoshotty!",
  icon: {
    "16": "./videoshotty-16.png",
    "32": "./videoshotty-32.png",
    "64": "./videoshotty-64.png"
  },
});

pageMod.PageMod({
  include: '*',
  contentScriptFile: ["./capture.js", "./textOverlay.js", "./conversion.js", "./gif.js", "./gif.worker.js"]
});

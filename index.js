var buttons = require('sdk/ui/button/action');
var pageMod = require("sdk/page-mod");

var button = buttons.ActionButton({
  id: "videoshotty-toolbar-button",
  label: "Videoshotty!",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  pageMod.PageMod({
    include: '*',
    contentScriptFile: ["./capture.js", "./textOverlay.js"]
  });
}

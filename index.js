var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "videoshotty-toolbar-button",
  label: "Videoshotty!",
  icon: {
    "16": "./videoshotty-16.png",
    "32": "./videoshotty-32.png",
    "64": "./videoshotty-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("https://www.google.com/");
}

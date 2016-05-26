(function(window) {
  "use strict";

  window.addTextOverlay = function(ctx, text, width, height) {
    ctx.font = '50px impact';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.textAlign = 'center';
    ctx.textBaseline="middle";
    ctx.strokeText(text, width / 2, height / 2);
    ctx.fillText(text, width / 2, height / 2);
  };
})(window);

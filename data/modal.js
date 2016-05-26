function openModal() {
  var html = '<div id="modal" style="position: fixed;left: 0;right: 0;top: 0;bottom: 0;background: rgba(0, 0, 0, 0.1);z-index: 999;"><div style="width: 50%;height: 50%;background: white;margin: 8% auto;"><h1>Please enter text for your image</h1><p>Top text</p><input id="top-text" type="text" style="display: block;margin: auto;margin-bottom: 20px;"><p>Bottom text</p><input id="bottom-text" type="text" style="display: block;margin: auto;"><div style="margin: 10px;"><div id="cancel-button" style="display: inline-block;padding: 10px;background: #DCC7DC;">Cancel</div><div id="go-button" style="display: inline-block;padding: 10px;background: #DCC7DC;">Go</div></div></div></div>';
  appendHtml(document.body.html);

  var modal = document.getElementById('modal');

  document.getElementById('go-button').addEventListner('click', function(e) {
    var topText = document.getElementById('top-text').value;
    var bottomText = document.getElementById('bottom-text').value;

    console.log('go button clicked, here are the values');
    console.log('top text ' + topText);
    console.log('bottom text ' + bottomText);
  });

  document.getElementById('cancel-button').addEventListner('click', function(e) {
    modal.parentNode.removeChild(modal);
  });
}

function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

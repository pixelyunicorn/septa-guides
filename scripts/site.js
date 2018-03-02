// Site scripts go here!

// Smooth Scroll (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// iFrame resize
// Get height of document
function getDocHeight(doc) {
    doc = doc || document;
    // from http://stackoverflow.com/questions/1145850/get-height-of-entire-document-with-javascript
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

// send docHeight onload
function sendDocHeightMsg(e) {
    var ht = getDocHeight();
    parent.postMessage( JSON.stringify( {'docHeight': ht} ), '*' );
    console.log('sent docHeight: ' + ht);
}

// assign onload handler
if ( window.addEventListener ) {
    window.addEventListener('load', sendDocHeightMsg, false);
    window.addEventListener('resize', sendDocHeightMsg, false);
} else if ( window.attachEvent ) { // ie8
    window.attachEvent('onload', sendDocHeightMsg);
}
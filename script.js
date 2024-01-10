//
//    OSX SCREENSAVER DOWNLOAD:
//    https://goo.gl/AtpYAA 
//

$(document).ready(function () {
	$('.fadein').delay(1000).fadeIn(17000);
    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    setInterval(function () {
        var hours = new Date().getHours();
        var seconds = new Date().getSeconds();
        var minutes = new Date().getMinutes();
        var realTime = (hours < 10 ? '0' : '') + hours + ' : ' + (minutes < 10 ? '0' : '') + minutes + ' : ' + (seconds < 10 ? '0' : '') + seconds;
        $('.time').html(realTime);
        $('.time').attr('data-time', realTime);
        $('title').html(realTime);
    }, 1000);
});
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}
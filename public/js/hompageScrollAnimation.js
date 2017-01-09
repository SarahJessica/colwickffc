'use strict';

(function iife() {
  const splashPxPerVh = Math.floor($("#splash").height() / 100);

  $(window).on('scroll', function() {
    var topOffset = $(this).scrollTop();
    var bgImg = currentBgImg(percentageDown(topOffset));
    console.log(bgImg);
    $("#splash").css("background-image", "url(" + bgImg + ")");
    if (topOffset > $("#splash").height() ) {
      $("#splash").css("display", "none");
    } else {
      $("#splash").css("display", "visible");
    }
  });

}());

function currentBgImg(percent){
  if(percent < 100  && percent > 0 ) {
      return "/img/100-wave-frames/" + percent.toString() + ".jpg";
  } else if (percent >= 100 ){
    return "/img/100-wave-frames/100.jpg";
  } else {
    return "/img/100-wave-frames/1.jpg"
  }
}

function percentageDown(offSet){
  return Math.floor((offSet / $("#splash").height()) * 100)
}

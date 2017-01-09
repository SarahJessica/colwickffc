'use strict';

(function iife() {
  const splashPxPerVh = Math.floor($("#splash").height() / 100);
  var imgArray = [];

  preloadImages(imgArray);
  console.log(imgArray);

  $(window).on('scroll', function() {
    var topOffset = $(this).scrollTop();
    var bgImg = currentBgImg(percentageDown(topOffset), imgArray);

    $("#splash").css("background-image", "url(" + bgImg + ")");
    if (topOffset > $("#splash").height() ) {
      $("#splash").css("display", "none");
    } else {
      $("#splash").css("display", "visible");
    }
  });

}());

function preloadImages(imgs) {
  // remember images are labelled 1 to 100 not 0 to 99
  for (var i = 0; i <= 99; i++) {
    imgs[i] = new Image();
    imgs[i].src = "/img/100-wave-frames/" + (i + 1).toString() + ".jpg";
  }
  return imgs;
}

function currentBgImg(percent, imgs){

  if(percent < 100  && percent > 0 ) {
      return imgs[percent].src;
  } else if (percent >= 100 ){
    return "/img/100-wave-frames/100.jpg";
  } else {
    return "/img/100-wave-frames/1.jpg"
  }
}

function percentageDown(offSet){
  return Math.floor((offSet / $("#splash").height()) * 100)
}

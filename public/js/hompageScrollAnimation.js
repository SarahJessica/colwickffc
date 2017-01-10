'use strict';

(function iife() {
  const splashPxPerVh = Math.floor($("#splash").height() / 100);
  var prevScrollPos = 0;

  var imgArray = [];
  preloadImages(imgArray);



  $(window).on('scroll', function() {
    var topOffset = $(this).scrollTop();
    console.log(percentageDown(topOffset));
    var bgImg = currentBgImg(percentageDown(topOffset), imgArray, splashPxPerVh);
    setBgImg(bgImg, topOffset);
    fadeOutOnScroll(topOffset, '.animation__fade', 0, 100);

    // if ( prevScrollPos <= topOffset ) {
    //   if ( topOffset <= splashPxPerVh ) {
    //   }
    //   console.log("scroll down");
    // } else {
    //   console.log("sroll up");
    // }
    // prevScrollPos = topOffset;
    // console.log(topOffset);
  });

}());

// function appendHomepage(offset, startItem, appendItem) {
//   if (offset == $(startItem).height()) {
//     startItem.fadeOut(200).remove();
//   }
// }

function fadeOutOnScroll(offset, elem, startOffset, endOffset) {
  if ( offset >= startOffset) {
    if (offset < endOffset) {
      $(elem).css('opacity', ((100 - offset) / 100).toString());
    } else {
      $(elem).css('opacity', '0');
    }
  } else {
    $(elem).css('opacity', '1');
  }
}

function setBgImg(img, offset) {
  $("#splash").css("background-image", "url(" + img + ")");

}

function preloadImages(imgs) {
  // remember images are labelled 1 to 100 not 0 to 99
  for ( var i = 0; i <= 99; i++ ) {
    imgs[i] = new Image();
    imgs[i].src = "/img/100-wave-frames/" + (i + 1).toString() + ".jpg";
  }
  return imgs;
}

function currentBgImg(percent, imgs, pxPerPc){
  if(percent < 100  && percent > 0 ) {
      return imgs[percent].src;
  } else if (percent >= 50 ){
    return "/img/100-wave-frames/100.jpg";
  } else {
    return "/img/100-wave-frames/1.jpg"
  }
}

function percentageDown(offSet){
  return Math.floor((offSet / ($("#splash").height()) / 2) * 100);
}

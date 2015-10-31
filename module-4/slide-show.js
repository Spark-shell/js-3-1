//
(function($){
  var viewUL = $("div.view")
                .css("overflow", "hidden")
                .children("ul"),
    imgs = viewUL.find("img"),
    imgW = 400,
    imgsLen = imgs.length,
    totalImgs = imgsLen * imgW,
    current = 1;
  $("div#show")
    .show()
    .find("button").on("click", function(){
      
      var direction = $(this).attr("id"),
          position = imgW;
    //var direction = $(this).data("param");
    (direction == "next") ? ++current : --current;
    if(current == 0){
      current = imgsLen; // set last image
      direction = "next";
      position = totalImgs - imgW;
    }else if(current-1 == imgsLen){
      current = 1; //set first image
      position = 0;
    }
    //console.log(current);
      doIt(viewUL, position, direction);
    });
    function doIt(container, position, direction){
      var sign; //"-=" or "+="
      if(direction && position != 0){
        sign = (direction == "next") ? "-=" : "+=";
      }
      var shift = {"margin-left": sign ? (sign+position) :
                  position};
      var duration = {};
      if(position == 0 || position == imgW*(imgsLen-1))
        duration = {duration:0};
      container.animate(shift, duration);
    }
})(jQuery);
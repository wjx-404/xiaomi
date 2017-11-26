 //焦点图片自动滚动
 $(function() {
     var index = 0;
     var timer;

     function showBut() {
         for (var i = 0; i < $(".home-hero .but1").children().length; i++) {
             if ($(".home-hero .but1").children()[i].className = "on") {
                 $(".home-hero .but1").children()[i].className = "";
             }
         }
         $(".home-hero .but1").children()[index].className = "on";
     }

     function cp(offset) {
         var tleft = parseInt($(".home-hero #home-hero-slider")[0].style.left) + offset;
         $(".home-hero #home-hero-slider")[0].style.left = tleft + "px";
         if (tleft > 0) {
             $(".home-hero #home-hero-slider")[0].style.left = "-1366px"
         }
         if (tleft < -1366) {
             $(".home-hero #home-hero-slider")[0].style.left = "0px"
         }
     }

     function pre() {
         if (index == 0) {
             index = 1;
         } else {
             index -= 1;
         }
         showBut();
         cp(1366);
     }

     function nex() {
         if (index == 1) {
             index = 0;
         } else {
             index += 1;
         }
         showBut();
         cp(-1366);
     }

     function paly() {
         timer = setInterval(function() { nex(); }, 3000);
     }

     function stopTimer() {
         clearInterval(timer);
     }
     $(".home-hero #pre").click(function() {
         pre();
     });
     $(".home-hero #next").click(function() {
         nex();
     });
     $(".home-hero .but1 span").click(function() {
         var myIndex = parseInt($(this).attr("indexs"));
         var myOffset = -1366 * (myIndex - index);
         if (myOffset == 0) {
             return;
         }
         cp(myOffset);
         index = myIndex;
         showBut();
     });
     paly();
     $(".home-hero").mouseover(function() {
         stopTimer();
     });
     $(".home-hero").mouseout(function() {
         paly();
     });

     $(".site-footer-nav .nav-item").mouseover(function() {
         $(this).find(".item-children").show();
         $(this).find(".link").css("color", "#F60");
     });
     $(".site-footer-nav .nav-item").mouseout(function() {
         $(this).find(".item-children").hide();
         $(this).find(".link").css("color", "#333");
     });

     $(".site-footer-nav .nav-item").mouseover(function() {
         $(this).find(".keyword-list").show();
         $(this).find(".link").css("color", "#F60");
     });
     $(".site-footer-nav .nav-item").mouseout(function() {
         $(this).find(".keyword-list").hide();
         $(this).find(".link").css("color", "#333");
     });
 });
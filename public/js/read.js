$(function() {
    $(".header .topbar-info").mouseover(function() {
        $(this).find(".ma").show();
        $(this).find(".link").css("color", "#F60");
    });
    $(".header .topbar-info").mouseout(function() {
        $(this).find(".ma").hide();
        $(this).find(".link").css("color", "#333");
    });


    $(".header .nav").mouseover(function() {
        $(this).find(".quit").show();
        $(this).find(".link").css("color", "#F60");
    });
    $(".header .nav").mouseout(function() {
        $(this).find(".quit").hide();
        $(this).find(".link").css("color", "#333");
    });

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
            $(".home-hero #home-hero-slider")[0].style.left = "-1420px"
        }
        if (tleft < -1420) {
            $(".home-hero #home-hero-slider")[0].style.left = "0px"
        }
    }

    function pre() {
        if (index == 0) {
            index = 2;
        } else {
            index -= 1;
        }
        showBut();
        cp(1366);
    }

    function nex() {
        if (index == 2) {
            index = 0;
        } else {
            index += 1;
        }
        showBut();
        cp(-700);
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
        var myOffset = -700 * (myIndex - index);
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
});
// JavaScript Document
$(function() {
    //购物车特效
    $(".topbar-cart").mouseover(function() {
        $(".cart-menu").show();
        $(".cart-menu").css("border-left", "#b0b0b0 solid 1px").css("border-right", "#b0b0b0 solid 1px").css("border-bottom", "#b0b0b0 solid 1px");
        $(this).find(".cart-mini").css("background-color", "#FFF").css("color", "#ff6700").css("border-right", "#b0b0b0 solid 1px");
    });
    $(".topbar-cart").mouseout(function() {
        $(".cart-menu").hide();
        $(".cart-menu").css("border-left", "none").css("border-right", "none").css("border-bottom", "none");
        $(this).find(".cart-mini").css("background-color", "#333").css("color", "#b0b0b0").css("border-right", "none");
    });
    //菜单目录特效
    $(".header-nav .nav-item").mouseover(function() {
        $(this).find(".item-children").show();
        $(this).find(".link").css("color", "#F60");
    });
    $(".header-nav .nav-item").mouseout(function() {
        $(this).find(".item-children").hide();
        $(this).find(".link").css("color", "#333");
    });
    //搜索栏特效
    $(".header-search .search-text").click(function() {
        $(this).next().next().next().show();
        $(this).next().next().hide();
        $(this).css("border-color", "red");
        $(this).next().css("border-color", "red");
    });
    $(".header-search .search-text").blur(function() {
        $(this).next().next().next().hide();
        $(this).next().next().show();
        $(this).css("border-color", "#e0e0e0");
        $(this).next().css("border-color", "#e0e0e0");
    });
    $(".header-search .keyword-list li").mouseover(function() {
        $(this).css("background-color", "#CCC");
    });
    $(".header-search .keyword-list li").mouseout(function() {
        $(this).css("background-color", "#fff");
    });
    $(".header-search .search-text").dblclick(function() {
        $(this).val("");
    });
    //全部商品栏特效
    $(".home-hero-container .category-item").mouseover(function() {
        $(this).find(".children").show();
        $(this).find(".title").css("background-color", "#ff6700");
    });
    $(".home-hero-container .category-item").mouseout(function() {
        $(this).find(".children").hide();
        $(this).find(".title").css("background-color", "RGBA(0,0,0,0)");
    });
    $(".home-hero-container .category-item .star-goods").mouseover(function() {
        $(this).find(".text").css("color", "#ff6700");
    });
    $(".home-hero-container .category-item .star-goods").mouseout(function() {
        $(this).find(".text").css("color", "#333");
    });
    $(".home-hero-container .category-item .star-goods .btn-buy").mouseover(function() {
        $(this).css("background-color", "#ff6700").css("color", "#fff");
    });
    $(".home-hero-container .category-item .star-goods .btn-buy").mouseout(function() {
        $(this).css("background-color", "#fff").css("color", "#ff6700");
    });
    //焦点图片自动滚动
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
            $(".home-hero #home-hero-slider")[0].style.left = "-4904px"
        }
        if (tleft < -4904) {
            $(".home-hero #home-hero-slider")[0].style.left = "0px"
        }
    }

    function pre() {
        if (index == 0) {
            index = 4;
        } else {
            index -= 1;
        }
        showBut();
        cp(1226);
    }

    function nex() {
        if (index == 4) {
            index = 0;
        } else {
            index += 1;
        }
        showBut();
        cp(-1226);
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
        var myOffset = -1226 * (myIndex - index);
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
    //home-hero-sub部分鼠标移动图片上浮
    $(".home-promo-list li").mouseover(function() {
        $(this).css("margin-top", "0").css("margin-bottom", "qpx");
    });
    $(".home-promo-list li").mouseout(function() {
        $(this).css("margin-top", "2px").css("margin-bottom", "0px");
    });
    //明星商品来回重播
    var flag = true;
    var timer2;

    function cj() {
        if (flag) {
            $(".xm-carousel-list").css("margin-left", "0px");
            flag = false;
        } else {
            $(".xm-carousel-list").css("margin-left", "-1240px");
            flag = true;
        }
    }

    function play2() {
        timer2 = setInterval(function() { cj(); }, 3000);
    }

    function stopTimer2() {
        clearInterval(timer2);
    }
    play2();
    $(".xm-carousel-list").mouseover(function() {
        stopTimer2();
    });
    $(".xm-carousel-list").mouseout(function() {
        play2();
    });
    $(".span2").mouseover(function() {
        $(this).css("color", "#ff6700");
    });
    $(".span2").mouseout(function() {
        $(this).css("color", "#b0b0b0");
    });
    $(".span2-1").click(function() {
        $(".xm-carousel-list").css("margin-left", "-1240px");
    });
    $(".span2-2").click(function() {
        $(".xm-carousel-list").css("margin-left", "0px");
    });
    //main部分
    $(".home-brick-box .box-hd .more .more-link1").mouseover(function() {
        $(this).css("color", "#ff6700");
        $(this).find(".jt").css("background-color", "#ff6700").css("color", "#FFF");
    });
    $(".home-brick-box .box-hd .more .more-link1").mouseout(function() {
        $(this).css("color", "#424242");
        $(this).find(".jt").css("background-color", "#CCC").css("color", "#424242");;
    });
    //main部分鼠标移动图片上浮
    $(".brick-item-m-2").mouseover(function() {
        $(this).css("margin-top", "0").css("margin-bottom", "16px");
    });
    $(".brick-item-m-2").mouseout(function() {
        $(this).css("margin-top", "2px").css("margin-bottom", "14px");
    });
    $(".brick-item-m-1").mouseover(function() {
        $(this).css("margin-top", "0px").css("margin-bottom", "16px");
    });
    $(".brick-item-m-1").mouseout(function() {
        $(this).css("margin-top", "2px").css("margin-bottom", "14px");
    });
    //main 部分搭配部分商品轮换
    $(".tab-active1").mouseover(function() {
        $(this).css("color", "#ff6700").css("font-weight", "bolder");
        $(this).siblings().css("color", "#333").css("font-weight", "normal");
        $(".span-active1").css("display", "block");
        $(".span-active1").siblings().css("display", "none");
    });
    $(".tab-active2").mouseover(function() {
        $(this).css("color", "#ff6700").css("font-weight", "bolder");
        $(this).siblings().css("color", "#333").css("font-weight", "normal");
        $(".span-active2").css("display", "block");
        $(".span-active2").siblings().css("display", "none");
    });
    $(".tab-active3").mouseover(function() {
        $(this).css("color", "#ff6700").css("font-weight", "bolder");
        $(this).siblings().css("color", "#333").css("font-weight", "normal");
        $(".span-active3").css("display", "block");
        $(".span-active3").siblings().css("display", "none");
    });
    $(".tab-active4").mouseover(function() {
        $(this).css("color", "#ff6700").css("font-weight", "bolder");
        $(this).siblings().css("color", "#333").css("font-weight", "normal");
        $(".span-active4").css("display", "block");
        $(".span-active4").siblings().css("display", "none");
    });

});
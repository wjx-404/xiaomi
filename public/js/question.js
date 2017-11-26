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
});
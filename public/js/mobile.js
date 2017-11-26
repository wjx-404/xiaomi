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
});
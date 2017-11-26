$(function() {
    $(".nav").mouseover(function() {
        $(this).find(" .xiala").show();
        $(this).find(".link").css("color", "#F60");
    });
    $(".nav").mouseout(function() {
        $(this).find(" .xiala").hide();
        $(this).find(".link").css("color", "#333");
    });
});
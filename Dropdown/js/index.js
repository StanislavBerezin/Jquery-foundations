//when doc is ready
$(function () {
    //if clicked anywhere on html document then hide it
    $("html").click(function () {
        $(".dropdown").hide();
    });

    //any item that is inside to show
    $("nav ul li a:not(:only-child)").click(function (e) {
        $(this).siblings(".dropdown").toggle();


        //if another one is pressed, everything else will hide
        $(".dropdown").not($(this).siblings()).hide();
        e.stopPropagation();
    });
})
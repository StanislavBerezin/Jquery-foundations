//when doc is ready
$(function () {

    $(window).on("scroll", function () {

        //to know how much we went down
        var position = $("#begin").offset();


        //if top of the screen is greater than the height of element #begin(navbar) which is 80, then add active, and remove if else
        if ($(window).scrollTop() > position.top - 80) {
            $("nav").addClass("active");
        } else {
            $("nav").removeClass("active");
        };
    });
})
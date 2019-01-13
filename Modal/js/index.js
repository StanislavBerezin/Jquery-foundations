//when doc is ready
$(function () {
    //if click is pressed
    $(".open").on("click", function () {
        //overlay to make everything darker and show modal, both are done by adding class active
        $(".overlay, .modal").addClass("active");
    });

    //if close then remove the active classes
    $(".close, .overlay").on("click", function () {
        $(".overlay, .modal").removeClass("active");
    });


    //if pressed else where will also hide
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $(".overlay, .modal").removeClass("active");
        }
    });
})
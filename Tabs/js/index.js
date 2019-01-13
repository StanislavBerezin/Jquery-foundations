//when doc is ready
$(function () {
    $(".tab-list").on("click", ".tab", function (e) {
        e.preventDefault();

        //removes all active classes from tabs
        $(".tab").removeClass("active");
        //hides all the content
        $(".tab-content").removeClass("show");

        //this that was clicked is active
        $(this).addClass("active");
        //adding class "show" to the element assigned in href of the current tab
        $($(this).attr("href")).addClass("show");
    });
})
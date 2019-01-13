$(function () {
    //when accordion on click, get accordion header
    $(".accordion").on("click", ".accordion-header", function () {
        //and toggle class (next is the sibling), slideToggle is the effect
        $(this).toggleClass("active").next().slideToggle();
    });
});
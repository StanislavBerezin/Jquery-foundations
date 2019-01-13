//when doc is ready
$(document).ready(function () {
    //get class on click
    $('.hb-button').on('click', function () {
        //when its clicked toggle the class
        $('nav ul').toggleClass('show');
    })
})
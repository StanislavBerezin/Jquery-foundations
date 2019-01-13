$(function () {

    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function (e) {
        //so that it doesnt refresh the page
        e.preventDefault();
        //geting text from input
        var text = $('input:text').val();
        //appending it to our list which is a ul
        $list.append('<li>' + text + '</li>');
        //getting the input field back to zero
        $('input:text').val('');
    });

    //when clicked we remove it
    $list.on('click', 'li', function () {
        var $this = $(this);
        $this.remove();
    });

});
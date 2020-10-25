$(document).ready(function() {
   
    let title = $('#title'),
        description = $('textarea'),
        listIsEmpty = $('.list-is-empty'),
        list = $('ul');
       

    function addComment(event) {
        event.preventDefault();

        let titleVal = title.val(),
            descriptionVal = description.val(),
            hideListIsEmpty = listIsEmpty.hide();
         
        if (titleVal.length !== 0 && descriptionVal.length !== 0) {

            title.removeClass('error');
            description.removeClass('error');

            hideListIsEmpty;
            
            list.append(`
                <li class="list-item">
                    <div class="list-item-header">
                        <h3>${titleVal}</h3>
                        <button class="clear-button"></button>
                        <button class="minimize-button"></button>
                    </div>
                    <p class="list-item-description">${descriptionVal}</p>
                </li>
             `);
           
            titleVal = title.val('');
            descriptionVal = description.val('');
        } else {
            title.addClass('error');
            description.addClass('error');
            listIsEmpty.show();
        }
    }

    $('#submit-button').on('click', addComment);

    function deleteComment(item) {
        item.remove();
    }

    $('body').on('click', '.clear-button', function(event){
        event.preventDefault();

        let item = $(this).parents('.list-item');
            deleteComment(item);
            
        let items = $('.list-item');

        if (items.length == 0) {
            listIsEmpty.show();
        } 
    })

    $('body').on('click', '.minimize-button', function(event){
        event.preventDefault();

        let item = $(this).parents('.list-item');
        item.find('.list-item-description').slideToggle(300);

        $(this).toggleClass('rotated-minimize-button');
    })
});
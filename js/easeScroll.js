$(document).ready(function(){
    $('.btn-down').click( function(){
        let scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
        }
        return false;
    });
});

$(document).ready(function(){
    $('.to-registration').click( function(){
        let scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
        }
        return false;
    });
});


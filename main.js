
/*
* DOCUMENT READY
*/
$(document).ready( function() {

    // Click frecce prev e next 
    $('.next').click( function() {
        slideImg('next');
    });

    $('.prev').click( function() {
        slideImg('prev');
    }); 

    // KEYBOARD MOVEMENT 
    $(document).keydown( function(event) {
        if (event.keyCode === 37) {
            slideImg('prev');
        }  else if (event.keyCode === 39) {
            slideImg('next');
        }
    });

})  // END READY  

/**
 * FUNCTIONS 
 * */

//  IMG/ICONS SLIDE NEXT/PREV FUNCTIONS
function slideImg(direction) {
    var activeImg = $('.images img.active');
    var activeIcons = $('.nav i.active');

    // Reset
    activeImg.removeClass('active');
    activeIcons.removeClass('active');

    // NEXT
    if (direction === 'next') {
        if (activeImg.hasClass('last') ) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImg.next('img').addClass('active');
            activeIcons.next('i').addClass('active');
        }
    }

    // PREV
    if (direction === 'prev') {
        if (activeImg.hasClass('first') ) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImg.prev('img').addClass('active');
            activeIcons.prev('i').addClass('active');
        }
    }
}
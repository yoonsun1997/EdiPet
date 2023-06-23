$(document).ready(function() {
    $(window).scroll( function(){
        $('div.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > (bottom_of_object * 0.7) ){
                $(this).animate({'opacity':'1'},1500);
            }
        }); 
    });
});

// window.scrolltop -> 최상단에서 스크롤한 정도
// window.height -> 현재 창 높이 값

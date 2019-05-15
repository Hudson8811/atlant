$(function() {
    var $el, leftPos, newWidth,
        $mainNav = $("header .menu-line");

    $mainNav.append("<span id='magic-line'></span>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($("header .menu-line .border").width())
        .css("left", $("header .menu-line .border").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("header .menu-line .menu-item").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    });
});



var swiperHome = new Swiper('.home-slider .swiper-container', {
    effect: 'fade',
    pagination: {
        el: '.home-slider .swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
        },
        formatFractionCurrent: function (number) {
            myNum = addZero(number);
            return myNum;
        },
        formatFractionTotal: function (number) {
            myNum = addZero(number);
            return myNum;
        },
    },
    scrollbar: {
        el: '.home-slider .swiper-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.home-slider .swiper-button-next',
        prevEl: '.home-slider .swiper-button-prev',
    },
});



function addZero(n) {
    return n.length > 1 ? n : (+n > 0) ? "0" + n : n;
}
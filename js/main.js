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

    $('.kran-construct .right-block .list .item').hover(function () {
        $('.kran-construct .right-block .list .item').removeClass('active');
        $(this).addClass('active');
    })

    $('#to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('.contacts-page .address').on('click', function (e) {
        $('.contacts-page .address').removeClass('active');
        $(this).addClass('active');
    });

    $('[data-fancybox="images"]').fancybox({
        infobar: false,
        toolbar: false,
        transitionEffect: 'slide',
        baseClass: "images-fancy",
    });
});

function noRobot(e) {
    var range = $(e).val();
    if (range > 90){
        $(e).val('100').prop('disabled', true).parents('.range').addClass('finish');
    }
}

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

var swiperPartner = new Swiper('.partners-swiper .swiper-container', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 1,
    pagination: {
        el: '.partners-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.partners-swiper .swiper-button-next',
        prevEl: '.partners-swiper .swiper-button-prev',
    },
});


var swiperSerts = new Swiper('.serts-swiper .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: '.serts-swiper .swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' <span class="sep">/</span> ' + '<span class="' + totalClass + '"></span>';
        },
        formatFractionCurrent: function (number) {
            myNum = number + '-' + (number+4);
            return myNum;
        },
        formatFractionTotal: function (number) {
            myNum = number+4;
            return myNum;
        },
    },
    scrollbar: {
        el: '.serts-swiper .swiper-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.serts-swiper .swiper-button-next',
        prevEl: '.serts-swiper .swiper-button-prev',
    },
});


function addZero(n) {
    return n.length > 1 ? n : (+n > 0) ? "0" + n : n;
}





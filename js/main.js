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

    $('.faq-main-block .toggle-title').on('click', function (e) {
        $(this).toggleClass('active').siblings('.text').slideToggle();

    });

    $('[data-fancybox="images"]').fancybox({
        infobar: false,
        transitionEffect: 'slide',
        baseClass: "images-fancy",
        buttons: [
            "close"
        ],
        btnTpl: {
            close:
                '<button data-fancybox-close class="fancybox-button fancybox-button--close">' +
                '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.4561 1L1.00021 26.4558" stroke="white" stroke-width="2"/><path d="M26.4561 26.4561L1.00021 1.00021" stroke="white" stroke-width="2"/></svg>' +
                "</button>",
            arrowLeft:
                '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left">' +
                '<div><svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.585785 16.4142C-0.195259 15.6332 -0.195259 14.3668 0.585785 13.5858L13.3137 0.857864C14.0948 0.0768156 15.3611 0.0768156 16.1421 0.857864C16.9232 1.63891 16.9232 2.90524 16.1421 3.68629L4.82843 15L16.1421 26.3137C16.9232 27.0948 16.9232 28.3611 16.1421 29.1421C15.3611 29.9232 14.0948 29.9232 13.3137 29.1421L0.585785 16.4142ZM72 17H2V13H72V17Z" fill="white"/></svg></div>' +
                "</button>",

            arrowRight:
                '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right">' +
                '<div><svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M71.4142 16.4142C72.1953 15.6332 72.1953 14.3668 71.4142 13.5858L58.6863 0.857864C57.9052 0.0768156 56.6389 0.0768156 55.8579 0.857864C55.0768 1.63891 55.0768 2.90524 55.8579 3.68629L67.1716 15L55.8579 26.3137C55.0768 27.0948 55.0768 28.3611 55.8579 29.1421C56.6389 29.9232 57.9052 29.9232 58.6863 29.1421L71.4142 16.4142ZM0 17H70V13H0V17Z" fill="#FFFFFF"/></svg></div>' +
                "</button>",

        },
        thumbs : {
            autoStart : true,
            axis      : 'x'
        },
        afterLoad : function() {
            $('.fancybox-thumbs__list a').each(function() {
                number = $(this).data('index') + 1;
                myNum = addZero(number);
                $(this).html(myNum);
            });
        }
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
    var x = (typeof n!=='string') ? String(n) : n;
    return x.length > 1 ? n : (+n > 0) ? "0" + n : n;
}





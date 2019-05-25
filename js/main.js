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

    $('[id^="to-top"]').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('.contacts-page .address').on('click', function (e) {
        $('.contacts-page .address').removeClass('active');
        $(this).addClass('active');
    });

    $('.cat-menu .level-1 > a.cat-link').on('click', function (e) {
        event.preventDefault();
        if (!$(this).parents('.level-1').hasClass('opened')){
            $('.cat-menu .level-1').removeClass('opened').find('.cat-submenu').slideUp();
            $(this).parents('.level-1').addClass('opened').find('.cat-submenu').slideDown();
        }
    });

    $('.faq-main-block .toggle-title').on('click', function (e) {
        $(this).toggleClass('active').siblings('.text').slideToggle();
    });

    $('.menu-line .menu-btn').on('click', function (e) {
        $('.mobile-menu').addClass('opened');
        $('.bg-overlay').show();
    });
    $('.mobile-menu .close-side').on('click', function (e) {
        $('.mobile-menu').removeClass('opened');
        $('.bg-overlay').hide();
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


    $('[data-fancybox="calc"]').fancybox({
        infobar: false,
        transitionEffect: 'fade',
        baseClass: "images-fancy",
        toolbar: true,
        smallBtn: false,
        touch: false,
        clickSlide: false,
        clickOutside: false,
        buttons: [
            "close"
        ],
        btnTpl: {
            close:
                '<button data-fancybox-close class="fancybox-button fancybox-button--close">' +
                '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.4561 1L1.00021 26.4558" stroke="white" stroke-width="2"/><path d="M26.4561 26.4561L1.00021 1.00021" stroke="white" stroke-width="2"/></svg>' +
                "</button>"

        },
        thumbs : {
            autoStart : false,
            axis      : 'x'
        },
        afterShow: function( instance, current ) {
            var swiperCalc = new Swiper('#calc .swiper-container', {
                effect: 'fade',
                allowTouchMove: false,
                touchRatio: 0,
                pagination: {
                    el: '#calc .swiper-pagination',
                    dynamicBullets: true,
                    clickable: false,
                    dynamicMainBullets: 1,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + addZero(index + 1) + '</span>';
                    },
                },
                navigation: {
                    nextEl: '#calc .swiper-button-next2',
                    prevEl: '#calc .swiper-button-prev2',
                },
                on: {
                    reachEnd: function () {
                        $('#calc .control').hide();
                    },
                },
                breakpoints: {
                    999: {
                        pagination: {
                            el: '#calc .swiper-pagination',
                            dynamicBullets: false,
                            clickable: false,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + addZero(index + 1) + '</span>';
                            },
                        },


                    },
                    720: {
                        autoHeight: true,
                    },
                    500: {
                        autoHeight: true,
                        pagination: {
                            el: '#calc .swiper-pagination',
                            type: 'fraction',
                            renderFraction: function (currentClass, totalClass) {
                                return '<span class="' + currentClass + '"></span> <span class="sep"></span>' + '<span class="' + totalClass + '"></span>';
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
                    },
                }
            });
            $('#calc .control').show();
            $('#calc .slide-1 .cat-menu label').on('click', function (e) {
                event.preventDefault();
                var data = $(this).data('id');
                $('#calc .slide-1 li').removeClass('current');
                $(this).closest('li').addClass('current');
                $('#calc .slide-1 img').removeClass('active')
                $('#calc .slide-1 img[data-id="'+ data +'"]').addClass('active');
            });

            $('#calc .label-row  label').on('click', function (e) {
                event.preventDefault();
                $('#calc .label-row  label').removeClass('active');
                $(this).addClass('active');
            });

            $('#calc .slide-5 input').on('focus', function (e) {
                $(this).closest('.input-item').addClass('active');
            });
            $('#calc .slide-5 input').on('focusout', function (e) {
                $(this).closest('.input-item').removeClass('active');
            });
            $('#calc .slide-5 input').bind("change keyup input click", function() {
                if (this.value.match(/[^0-9]/g)) {
                    this.value = this.value.replace(/[^0-9]/g, '');
                }
            });

            $('#calc .go-first').on("click", function() {
                swiperCalc.slideTo(0);
                $('#calc .control').show();
            });
        },
        afterClose: function( instance, current ) {
            swiperCalc.destroy();
        },
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
    breakpoints: {
        999: {
            slidesPerView: 3,
            slidesPerColumn: 2,
        },
        720: {
            slidesPerView: 2,
            slidesPerColumn: 2,
        },
        450: {
            slidesPerView: 1,
            slidesPerColumn: 3,
        },
    }
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

    breakpoints: {
        999: {
            slidesPerView: 3,
            spaceBetween: 26,
            pagination: {
                el: '.serts-swiper .swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' + ' <span class="sep">/</span> ' + '<span class="' + totalClass + '"></span>';
                },
                formatFractionCurrent: function (number) {
                    myNum = number + '-' + (number+2);
                    return myNum;
                },
                formatFractionTotal: function (number) {
                    myNum = number+2;
                    return myNum;
                },
            },
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 25,
            centeredSlides: true,
            pagination: {
                el: '.serts-swiper .swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' + ' <span class="sep">/</span> ' + '<span class="' + totalClass + '"></span>';
                },
                formatFractionCurrent: function (number) {
                    myNum = number;
                    return myNum;
                },
                formatFractionTotal: function (number) {
                    myNum = number;
                    return myNum;
                },
            },
        }

    }
});


function addZero(n) {
    var x = (typeof n!=='string') ? String(n) : n;
    return x.length > 1 ? n : (+n > 0) ? "0" + n : n;
}



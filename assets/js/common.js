$(document).ready(function () {
    $('.slider1').bxSlider({
        slideWidth: 1000,
        minSlides: 7,
        maxSlides: 7,
        slideMargin: 10,
        auto: true,
        autoControls: true,
        infiniteLoop: true,
        moveSlides: 1,
        speed: 1000
    });


    $(".industry").mouseover(function () {
        $(this).find("p.desc").stop().animate({
            'opacity': 1
        }, 500);
    });

    $(".industry").mouseout(function () {
        $(this).find("p.desc").stop().animate({
            'opacity': 0
        }, 500);
    });



    //   EQUAL DIV HEIGHT START
    equalheight = function (container) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function () {
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    $(window).load(function () {
        equalheight('.card .caption');
    });

    $(window).resize(function () {
        equalheight('.card .caption');
    });

    //   EQUAL DIV HEIGHT END
    
    
    
});

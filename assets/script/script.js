$(document).ready(function(){
    $('.site-hero__slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        sccEase: 'ease-in-out',
        mobileFirst: true
 
    });
    
    $(".latest-news__slider").slick({
        autoplay: false,
        dots: true,
        infinite: true,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true
    });
    $(".latest-news__button-prew").click(function(){
        $(".latest-news__slider").click("slick-prev");
    });
    $(".latest-news__button-next").click(function(){
        $(".latest-news__slider").click("slick-next");
    });
    
});
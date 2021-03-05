$(function() {
    var swiper1=new Swiper('.swiper1', {
        loop: true,
        effect: 'fade',
        autoplay: {
        delay:3000,
        disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        on: {
        slideChangeTransitionStart: function(){
            let num=this.activeIndex
            if(this.activeIndex===5){
                num=1
            }
            $('.company-nav li').eq(num-1).addClass('on').siblings().removeClass('on')
        },
        },
    })
    $('.company-nav').on('tap', 'li', function (e) {
        let num=Number($(this).attr("value"))
        swiper1.slideTo(num,1000,false)
        $('.company-nav li').eq(num-1).addClass('on').siblings().removeClass('on')

    })

    var swiper2=new Swiper('.swiper2', {
        loop: true,
        autoplay: {
        delay:3000,
        disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        on: {
        slideChangeTransitionStart: function(){
            let num=this.activeIndex
            if(this.activeIndex===5){
                num=1
            }
            $('.employmentOl li').eq(num-1).addClass('on').siblings().removeClass('on')
        },
        },
    })
    $('.employmentOl').on('tap', 'li', function (e) {
        let num=Number($(this).attr("value"))
        swiper2.slideTo(num,1000,false)
        $('.employmentOl li').eq(num-1).addClass('on').siblings().removeClass('on')

    })
    $('.moreImg').on('tap',function(e){
        $('.moreImg').css('display', 'none')
        $('.chaImg').css('display', 'block')
        $('.nav').css('display', 'block')
    })
    $('.chaImg,.nav').on('tap',function(e){
        $('.moreImg').css('display', 'block')
        $('.chaImg').css('display', 'none')
        $('.nav').css('display', 'none')
    })
   
    $(".nav-list").click(function(e){
        // 阻止事件冒泡
        e.stopPropagation();
    });
});
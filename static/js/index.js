
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
          $('.com_list li').eq(num-1).addClass('on').siblings().removeClass('on')
      },
    },
  })
  $('.com_list').on('mouseover', 'li', function (e) {
      let num=Number($(this).attr("value"))
      swiper1.slideTo(num-1,1000,false)
      $('.com_list li').eq(num-1).addClass('on').siblings().removeClass('on')

  })

  var swiper2=new Swiper('.swiper2', {
    loop: true,
    autoplay: {
      delay:3000,
      disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        /* nextEl: '.next',
        prevEl: '.prev' */
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
  $('.employmentOl').on('mouseover', 'li', function (e) {
    let num=Number($(this).attr("value"))
    swiper2.slideTo(num-1,1000,false)
    $('.employmentOl li').eq(num-1).addClass('on').siblings().removeClass('on')

})
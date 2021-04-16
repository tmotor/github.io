$(function() {
  $(window).scroll(function() {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.js-scrollanime').each(function() {
      const targetPosision = $(this).offset().top;
      if(scrollAmount > targetPosision - wHeight + 60) {
        $(this).addClass("js-fadeInDown");
      }
    });
  });
});
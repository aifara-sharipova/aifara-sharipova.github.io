//process slider
const swiper = new Swiper('.swiper', {
       
      
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
  });

  //fancybox галерея
  Fancybox.bind("[data-fancybox]", {});

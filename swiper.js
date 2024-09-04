const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      dynamicBullets : true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      slidesPerView: 3,
    
  });


  
let swiper = new Swiper('.swiper', {
    freeMode: {
        enabled: true,
        sticky: true,
    },
    loop: true,
    longSwipes: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 700,
})
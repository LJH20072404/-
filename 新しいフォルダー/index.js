let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    speed: 1500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});
AOS.init();
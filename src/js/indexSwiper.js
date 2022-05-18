define((['jquery', 'swiper']), ($, Swiper) => {
    function indexSwiperLoad() {
        var swiper = new Swiper(".mySwiper", {
            autoplay: {
                delay: 2000,//1秒切换一次
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        });
    }
    return {
        indexSwiperLoad: indexSwiperLoad
    }
})
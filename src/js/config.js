require.config({
    baseUrl: '/',
    // baseUrl: '/',
    paths: {
        jquery: 'libs/jquery.min',
        swiper: 'libs/swiper-bundle.min',
        bootstrap: 'libs/bootstrap.min',
        paging: 'libs/jquery-paging',
        header: 'js/header',
        footer: 'js/footer',
        login: 'js/login',
        register: 'js/register',
        index: 'js/index',
        initAMap: 'js/initAMap',
        typelist: 'js/typelist',
        addShop: 'js/addShop',
        details: 'js/details',
        toDetails: 'js/toDetails',
        cart: 'js/cart',
        delivery: 'js/delivery',
        amap: "https://webapi.amap.com/maps?v=1.4.15&key=3f547ad7612ec20c3ebfea705e720c15&callback=onAMapLoaded",
        //map: "https://cache.amap.com/lbs/static/addToolbar"
    },
    shim: {
        bootstrap: ['jquery'],
        paging: {
            deps: ['jquery']
        }
    }
})

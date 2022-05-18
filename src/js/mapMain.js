console.log("加载成功")
//主入口文件，组合其他功能

require(['config'], () => {

    window.onAMapLoaded = function () {
        console.log(666);
        require(['initAMap'], function (mapIniter) {
            mapIniter.init();
        })
    }
    require(['amap'])
    require(['jquery', 'header', 'footer'], ($, header, footer) => {
        header.headerLoad()
    })
})

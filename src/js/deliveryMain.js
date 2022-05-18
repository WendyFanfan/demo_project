console.log("deliveryMain加载成功")
//主入口文件，组合其他功能
require(['./config'], () => {
    require(['jquery', 'header', 'footer', 'delivery'], ($, header, footer, delivery) => {
        //首页头部加载
        header.headerLoad()
        delivery.deliveryLoad()






    })
})
console.log("cartMain加载成功")
//主入口文件，组合其他功能
require(['./config'], () => {
    require(['header', 'footer', 'cart'], (header, footer, cart) => {
        //首页头部加载
        header.headerLoad()

        cart.cartLoad()




    })
})
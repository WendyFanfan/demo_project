
console.log("加载成功")
//主入口文件，组合其他功能
require(['./config'], () => {
    require(['header', 'footer', 'index', 'addShop', 'toDetails'], (header, footer, index, addShop, toDetails) => {
        //首页头部加载
        header.headerLoad()
        //首页数据渲染
        index.indexLoad()
        //加入购物车模块
        addShop.addShop()
        //跳转详情模块
        toDetails.toDetailsLoad()





    })
})
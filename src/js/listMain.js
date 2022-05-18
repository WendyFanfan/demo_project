
console.log("加载成功")
//主入口文件，组合其他功能
require(['./config'], () => {
    require(['header', 'footer', 'toDetails', 'typelist'], (header, footer, toDetails, typelist) => {
        //首页头部加载
        header.headerLoad()

        toDetails.toDetailsLoad()

        typelist.typeList()






    })
})
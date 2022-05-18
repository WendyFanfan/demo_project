console.log("detailsMain加载成功")
//主入口文件，组合其他功能
require(['./config'], () => {
    require(['jquery', 'header', 'footer', 'details'], ($, header, footer, details) => {
        //首页头部加载
        header.headerLoad()
        details.detailsLoad()






    })
})
define((['amap']), function () {
    var init = function () {
        var map = new AMap.Map("container", {
            resizeEnable: true
        });
        let box = document.querySelector('#panel')
        $.get({
            url: "https://restapi.amap.com/v3/place/text?key=4142491c231f33723ecfce4d0c8e59be&keywords=阿迪达斯&types=购物服务&city=510100&children=1&offset=20&page=1&extensions=all&output=json",
            success: res => {

                console.log(res)
                //console.log(typeof (res))
                let data = res.pois
                console.log(data)
                data.forEach(item => {

                    let a = item.adname
                    let b = item.address
                    console.log(a)
                    console.log(b)
                    box.innerHTML += `
                    <li>
                    <p class="shop-name"><span class="iconfont icon-wxbdingwei"></span>${item.business_area}阿迪达斯专卖店</p>
                    <p class="location">${item.address}</p>
                    <p class="distance">${item.adname}</p>
                </li>
                    `
                });
            }
        })
    };


    return {
        init: init
    };
});
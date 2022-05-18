define((['jquery', 'bootstrap']), ($, bootstrap) => {
    function deliveryLoad() {
        function chaxun(num) {
            function formatterDateTime() {
                var date = new Date()
                var month = date.getMonth() + 1
                var datetime = date.getFullYear()
                    + ""// "年"
                    + (month >= 10 ? month : "0" + month)
                    + ""// "月"
                    + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
                    + ""
                    + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
                    + ""
                    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
                    + ""
                    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
                return datetime;
            }
            $.ajax({
                type: 'post',
                url: 'http://route.showapi.com/2650-3',
                dataType: 'json',
                data: {
                    "showapi_timestamp": formatterDateTime(),
                    "showapi_appid": '1016092', //这里需要改成自己的appid
                    "showapi_sign": '7d0bb88e4ef94193b86a969e1a3bc1c7',  //这里需要改成自己的应用的密钥secret
                    "com": "zhongtong",
                    "nu": num,
                    "phone": ""
                },

                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert("操作失败!");
                },
                success: function (result) {

                    //console.log(result)
                    //console.log(typeof (result))
                    let res = result.showapi_res_body.data

                    //let res = JSON.parse(result)
                    //res = result.showapi_res_body.context
                    console.log(res)
                    let box = document.querySelector('#kuaidi-con')
                    res.forEach(item => {
                        box.innerHTML += `
                        <li>
                            <span class="time">${item.time}</span>
                            <span class="address">${item.address}</span>
                            <span class="context">${item.context}</span>
                        </li>

                    `
                    })
                    return res
                }

            })



        }
        chaxun("75523651784107")
        //res = JSON.stringify(res)
        // res = JSON.parse(res)
        // res = res.showapi_res_body.context



    }

    return {
        deliveryLoad: deliveryLoad
    }

})
define((['jquery', 'bootstrap']), ($, bootstrap) => {
    function loginSend() {
        console.log("加载成功")
        // 定义开关变量
        var flagAllow = true;
        //本地是否有数据
        if ((localStorage.getItem('username')) && (localStorage.getItem('password'))) {
            $('#username').val(localStorage.getItem('username'))
            $('#password').val(localStorage.getItem('password'))
        }

        //点击同意协议复选框，判断是否勾选。如果勾选，则隐藏提示信息，没有勾选，则显示报错信息
        $('#allow').click(function () {
            fnCheckAllow()
        })
        // 封装函数
        function fnCheckAllow() {
            if ($('#allow').prop('checked')) {
                flagAllow = true
            }
            else {
                flagAllow = false
                return false
            }
        }
        $('#login-btn').click(function () {
            console.log($('#login-btn'))
            console.log(flagAllow)
            if (flagAllow) {
                //存入本地localStorage
                if ($('#username').val() == localStorage.getItem('username') && $('#password').val() == localStorage.getItem('password')) {
                    location.href = '../index.html'
                }
                if ($('#username').val() == '' || $('#password').val() == '') {
                    $('#ff').html("用户名或者密码不能为空")
                }
                else {
                    $('#ff').html("用户名或者密码输入错误")
                }
            }
            else {
                $('#login-btn').popover('show')
                return false
            }
        })
        //5秒钟后提示信息消失
        setInterval(function () {
            $('#login-btn').popover('hide')
        }, 5000)
    }
    return {
        loginSend: loginSend
    }

})
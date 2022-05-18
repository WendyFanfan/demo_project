define((['jquery', 'bootstrap']), ($, bootstrap) => {
    console.log($('#username'))
    console.log("加载成功")
    function registerSend() {

        //表单验证
        // 定义开关变量
        var flagUser = false
        var flagPwd = false
        var flagCpwd = false
        var flagEmail = false
        var flagAllow = true;
        console.log($('#username'))

        // 1.如果失去焦点，则进行检查判断用户名是否合法
        $('#username').blur(function () {
            // 封装函数 调用函数
            fnCheckUser()
        })
        function fnCheckUser() {
            // 获取用户输入的数据
            var vals = $('#username').val()
            // 正则，正则验证用户输入的数据是否合法
            var re = /^[a-zA-Z0-9_-]{4,16}$/

            if (vals == '') {
                $('#username-tishi').show().html('用户名不能为空')
                flagUser = false
                return
            }
            if (re.test(vals)) {
                // 合法 -- 隐藏报错信息
                $('#username-tishi').hide()
                flagUser = true
            } else {
                // 不合法 -- 报错 -- 下面的span标签显示
                $('#username-tishi').html('用户名是4-10位数字、字母和下划线！')
                flagUser = false
            }
        }
        // 2.如果密码框失去焦点，则进行检查判断密码是否合法
        $('#password').blur(function () {
            // 封装函数，调用函数
            fnCheckPwd()
        })
        function fnCheckPwd() {
            // 获取密码框输入的数据
            var vals = $('#password').val()
            // 密码正则匹配表达式
            var rePass = /^[\w!-@#$%^&*]{6,20}$/
            // 如果输入框为空，则提示不能为空并return
            if (vals == '') {
                $('#password-tishi').show().html('密码不能为空')
                flagPwd = false
                return
            }
            // 正则验证密码输入是否合法
            if (rePass.test(vals)) {
                // 如果匹配成功，则隐藏span标签
                $('#password-tishi').hide()
                flagPwd = true
            }
            else {
                // 如果匹配失败，则显示span标签，替换提示信息
                $('#password-tishi').show().html('密码是6到20位字母、数字，还可包含@!#$%^&*-字符')
                flagPwd = false
            }
        }

        // 3.判断两次输入的密码是否一致
        $('#password1').blur(function () {
            // 封装函数，调用函数
            fnCheckCpwd()
        })
        function fnCheckCpwd() {
            // 获取重复密码框输入的数据
            var vals = $('#password').val()
            var cvals = $('#password1').val()
            if (cvals == '') {
                $('#password1-tishi').show().html('重复密码框不能为空')
                flagCpwd = false
                return
            }
            if (vals == cvals) {
                $('#password1-tishi').hide()
                flagCpwd = true
            }
            else {
                $('#password-tishi1').show().html('两次密码输入不一致，请重新输入')
                flagCpwd = false
                return
            }
        }

        // 4.如果邮箱框失去焦点，则进行检查判断邮箱是否合法
        $('#email').blur(function () {
            // 封装函数，调用函数
            fnCheckEmail()
        })
        function fnCheckEmail() {
            // 获取邮箱框输入的数据
            var vals = $('#email').val()
            // 邮箱正则匹配表达式
            var reMail = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/i
            // 如果输入框为空，则提示不能为空并return
            if (vals == '') {
                $('#email-tishi').show().html('邮箱不能为空')
                flagEmail = false
                return
            }
            // 正则验证邮箱输入是否合法
            if (reMail.test(vals)) {
                // 如果匹配成功，则隐藏span标签
                $('#email-tishi').hide()
                flagEmail = true
            }
            else {
                // 如果匹配失败，则显示span标签，替换提示信息
                $('#email-tishi').show().html('你输入的邮箱格式不正确')
                flagEmail = false
            }
        }


        // 5.点击同意协议复选框，判断是否勾选。如果勾选，则隐藏提示信息，没有勾选，则显示报错信息
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

        // 6.所有输入框验证通过再提交注册
        $('#btn').click(function () {

            if (flagUser && flagPwd && flagCpwd && flagEmail && flagAllow) {
                //存入本地localStorage
                localStorage.setItem('username', $('#username').val())
                //console.log(localStorage.getItem('username'))
                localStorage.setItem('password', $('#password').val())
                location.href = 'login.html'
            }
            else {
                $('#btn').popover('show')
                return false
            }
        })
        //5秒钟后提示信息消失
        setInterval(function () {
            $('#btn').popover('hide')
        }, 5000)

    }
    return {
        registerSend: registerSend
    }

})
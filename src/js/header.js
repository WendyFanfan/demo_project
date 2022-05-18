define((['jquery']), ($) => {
    function headerLoad() {
        $('header').load('../html/header.html', () => {
            //所有下拉框都应该默认隐藏
            $('.showggg').hide()
            headerFn()
        })
        function headerFn() {
            function change() {
                var res = localStorage.getItem('username')
                console.log(res)
                //本地localStorage有数据    
                if (res) {
                    $('#link').hide()
                    $('#show-name').html("欢迎您 " + res)
                    $('#show-name').show()
                    $('#del').show()
                }
                else {
                    $('#link').show()
                    $('#show-name').hide()
                    $('#del').hide()

                }
            }

            //退出登录
            $('#del').click(() => {
                //删除localStorage
                localStorage.removeItem('username')
                change()
            })
            change()

            //购物车显示数量
            if (!localStorage.getItem('cartNum')) {
                $('#cart-num').html("0")
            }
            else {
                $('#cart-num').html(localStorage.getItem('cartNum'))
            }


            let nanwear = document.querySelector('#manwear')
            let manshoes = document.querySelector('#manshoes')
            let womanwear = document.querySelector('#womanwear')
            let womanshoes = document.querySelector('#womanshoes')
            let child = document.querySelector('#child')


            $('#nanzhuang').click(() => {
                $('.showggg').hide()
                $('.nanzhuangShow').toggle()
                show('../data/manwear.json', nanwear)

            })
            $('#nanxie').click(() => {
                $('.showggg').hide()
                $('.nanxieShow').toggle()
                show1('../data/manshoes.json', manshoes)

            })
            $('#nvzhuang').click(() => {
                $('.showggg').hide()
                $('.nvzhuangShow').toggle()
                show('../data/womanwear.json', womanwear)

            })
            $('#nvxie').click(() => {
                $('.showggg').hide()
                $('.nvxieShow').toggle()
                show1('../data/womanshoes.json', womanshoes)

            })
            $('#ertong').click(() => {
                $('.showggg').hide()
                $('.ertongShow').toggle()
                show1('../data/child.json', child)

            })
            $(".showggg").mouseleave(function () {
                $('.showggg').hide()
            });

            function show1(url, a) {
                a.innerHTML = ''
                $.get({
                    url: url,
                    success: (res) => {
                        //console.log(res)
                        let data = JSON.stringify(res)
                        data = JSON.parse(data)
                        //console.log(data.layout[3].component[0].options)
                        let result = data.layout[3].component[0].options
                        result = JSON.parse(result)
                        result.forEach(item => {
                            //console.log(item.imgDescription)
                            a.innerHTML += `
                            <li>
                            <img src="${item.imgUrl}" alt="">
                                <h3 id="title">${item.imgDescription}</h3>
                                
                                </li>
                            `
                        });


                    }
                })

            }
            $('.showggg').click(e => {
                e = e || window.event
                let target = e.target || e.srcElement
                if (target.nodeName == 'LI') {
                    location.href = "html/typelist.html"
                }
            })
            function show(url, a) {
                a.innerHTML = ''
                $.get({
                    url: url,
                    success: (res) => {
                        //console.log(res)
                        let data = JSON.stringify(res)
                        data = JSON.parse(data)
                        //console.log(data.layout[3].component[0].options)
                        let result = data.layout[1].component[0].options
                        result = JSON.parse(result)
                        result.forEach(item => {
                            //console.log(item.imgDescription)
                            a.innerHTML += `
                            <li>
                            <img src="${item.imgUrl}" alt="">
                                <h3 id="title">${item.imgDescription}</h3>
                                
                                </li>
                            `
                        });


                    }
                })
            }
        }



    }
    return {
        headerLoad: headerLoad
    }



})
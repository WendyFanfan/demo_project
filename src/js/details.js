define((['jquery']), ($) => {
    function detailsLoad() {
        if (!localStorage.getItem('details')) {
            alert("发生什么事了？")
        }
        let data = localStorage.getItem('details')
        data = JSON.parse(data)
        console.log(data)
        console.log(data.title)
        $('#product-name').html(data.title)
        $('#des').html(data.title)
        $('#first').attr('src', data.pic1)
        $('#second').attr('src', data.pic2)
        $('#third').attr('src', data.pic3)
        $('#four').attr('src', data.pic4)
        $('#small-pic').attr('src', data.pic1)
        $('#product-number1').html(data.cart_number)
        //let op = document.querySelector("#op")
        $('#op').click((e) => {
            e = e || window.event
            let target = e.target || e.srcElement
            if (target.className == 'add') {
                if (data.cart_number >= 10) {
                    $('#add').attr("disabled", "disabled")
                    return false
                }
                data.cart_number++
                $('#product-number1').html(data.cart_number)
                $('#add').attr("disabled", "able")




            }
            if (target.className == 'reduce') {
                if (data.cart_number <= 0) {
                    $('#reduce').attr("disabled", "disabled")
                    return false
                }
                data.cart_number--
                $('#product-number1').html(data.cart_number)
                $('#reduce').attr("disabled", "able")

            }

        })
        //选择size
        $('#select-size').click((e) => {
            e = e || window.event
            let target = e.target || e.srcElement
            if (target.nodeName == 'LI') {
                for (let i = 0; i < $('#select-size>li').length; i++) {

                    $('li').css("background", "#f9f9f9")
                    $('li').css("color", "#000")
                }
                data.select_size = target.className
                target.style.background = '#000'
                target.style.color = '#fff'
            }


        })
        $.get({
            url: '../data/wear.json',
            success: (res) => {
                var resData = JSON.stringify(res)
                resData = JSON.parse(resData)


                $('#addcart').click(() => {
                    let goods_id = data.goods_id - 0
                    let goods = resData.find(item => { return item.goods_id == goods_id })
                    let list = JSON.parse(localStorage.getItem('cart')) || []
                    if (!list.length) {
                        //没有数据，添加数据进行数组
                        //console.log('没有数据')
                        list.push(goods)
                        //console.log(goods)
                        goods.cart_number = 1
                    } else {
                        //有数据，判断下当前的数组里面有没有重复发数据
                        //console.log('有数据')
                        let res = list.some(item => { return item.goods_id == goods_id })
                        if (res) {
                            //说明有重复的数据，把当前的数据数量进行自增 findIndex() 都是查找数组元素的位置，找到了就不会继续遍历其他的元素，所以性能更好 
                            //indexOf() 都是查找数组元素的位置，找到了会继续遍历，看看它是否是第一次出现的位置
                            let index = list.findIndex(item => { return item.goods_id == goods_id })
                            list[index].cart_number += data.cart_number
                        } else {
                            //说明数据没有重复的，把当前的数据添加进数组里面
                            list.push(goods)
                            goods.cart_number = 1
                        }
                    }
                    localStorage.setItem('cart', JSON.stringify(list))
                    //当咱们点击页面的时候重新调用一次
                    count()
                    //let a = localStorage.getItem('cart')
                    //console.log(a)
                    //计算总的数量
                    function count() {
                        //获取localStorage里面的数据
                        let list = JSON.parse(localStorage.getItem('cart')) || []
                        let num = 0
                        //遍历
                        list.forEach(item => {
                            num += item.cart_number
                        })
                        //进行赋值操作
                        //$('#cart-num').html(num)
                        //改为存为本地
                        localStorage.setItem('cartNum', num)
                    }
                    count()
                    location.href = "../html/cart.html"
                    $('#addcart').css("background", "#000")
                    $('#addcart').css("color", "#fff")

                })

            }
        })




    }
    return {
        detailsLoad: detailsLoad
    }
})
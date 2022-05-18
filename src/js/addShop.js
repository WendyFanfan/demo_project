define((['jquery']), ($) => {
    function addShop() {
        $.get({
            url: '../data/wear.json',
            success: (res) => {
                var data = JSON.stringify(res)
                data = JSON.parse(data)
                //console.log(data)
                //console.log(data[0].cart_number)
                $('#wear-list').click(e => {
                    e = e || window.event
                    let target = e.target || e.srcElement
                    if (target.nodeName == 'A') {
                        //获取HTML5自定义属性的值
                        let goods_id = target.dataset.id - 0
                        //console.log(goods_id)
                        //获取对应的渲染列表的数据
                        let goods = data.find(item => { return item.goods_id == goods_id })
                        //先查看localStorage里面有没有数据，如果没有返回一个空数组，咱们给空数组里面添加数据
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
                                list[index].cart_number++
                            } else {
                                //说明数据没有重复的，把当前的数据添加进数组里面
                                list.push(goods)
                                goods.cart_number = 1
                            }
                        }
                        //存数据进localStorage里面
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
                            //赋值改为存在本地
                            localStorage.setItem('cartNum', num)
                        }
                        count()
                    }
                })
            }
        })

    }
    return {
        addShop: addShop
    }

})





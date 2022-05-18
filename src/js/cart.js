
define((['jquery']), ($) => {
    function cartLoad() {
        //从购物车取出数据
        let list = JSON.parse(localStorage.getItem('cart')) || []
        console.log(list)
        let box = document.querySelector('#left-box')
        // console.log(box)
        // console.log(list[0].is_select)
        render()
        //渲染数据
        function render() {
            //
            if (!list.length) {
                box.innerHTML = `
                <h3>亲你的购物空空如也</h3>
                <p class="des"><a href="../index.html">去购物吧</a></p>
                `
            }
            else {
                //每次拿到数据先清空
                box.innerHTML = ''
                //渲染数据
                list.forEach(item => {
                    box.innerHTML += `
                    <li>
                    <input type="checkbox" class="is-select" name="" id="" data-id="${item.goods_id}" ${item.is_select && "checked"}>
                    <img src="${item.pic1}">
                    <div class="list-con">
                        <h4 class="des">${item.title}</h4>
                        <div class="op">

                            <div class="add" data-id="${item.goods_id}">+</div>
                            <input type="text" value="${item.cart_number}" />
                            <div class="sub" data-id="${item.goods_id}">-</div>
                        </div>
                        <p class="size">尺码:${item.select_size}</p>
                        <p class="pirce">￥${item.price}</p>
                        <span class="del" data-id="${item.goods_id}"> 移除</span>
                        <a href="addShop.html">选择规格</a>
                    </div>
                </li>
                    `
                })

            }
            //数据可持续化
            localStorage.setItem('cart', JSON.stringify(list))


        }
        $('#box').click(e => {
            let target = e.target || e.srcElement
            //全选功能
            if (target.className == 'select-all') {
                let type = target.checked
                console.log(type)
                list.forEach(item => {
                    item.is_select = type
                })
                render()
                total()
            }
            //单选功能
            if (target.className == 'is-select') {
                let id = target.dataset.id - 0
                //找到对应的数据修改状态
                let goods = list.find(item => { return item.goods_id == id })
                // console.log(goods)
                //console.log(goods.is_select)
                goods.is_select = !goods.is_select
                render()
                total()

            }
            //点击减少商品数量
            if (target.className == 'sub') {
                let id = target.dataset.id - 0
                let goods = list.find(item => { return item.goods_id == id })
                if (goods.cart_number == 1) {
                    return false
                }
                goods.cart_number--
                render()
                total()

            }
            //点击增加商品数量
            if (target.className == 'add') {
                let id = target.dataset.id - 0
                let goods = list.find(item => { return item.goods_id == id })
                if (goods.cart_number == 10) {
                    return false
                }
                goods.cart_number++
                render()
                total()
            }

            //点击删除商品
            if (target.className == 'del') {
                let goods_id = target.dataset.id - 0
                let index = list.findIndex(item => { return item.goods_id == goods_id })
                list.splice(index, 1)
                render()
                total()
                if (!list.length) {
                    $('.select-all').prop("checked", false)

                }
            }
            //计算总价
            function total() {
                let num = 0
                let price = 0
                //总价必须是选中状态才计算
                list.forEach(item => {
                    if (item.is_select == true) {
                        num += item.cart_number
                        price += item.cart_number * item.price
                        localStorage.setItem('cartNum', num)
                        let res = list.every(item => {
                            return item.is_select == true
                        })
                        //所有的都选中了，全选框也要选中
                        if (res) {
                            $('.select-all').prop("checked", true)
                        }
                        else {
                            $('.select-all').prop("checked", false)
                        }
                    }
                    $('.price').html("￥" + price)

                })
            }
        })

    }
    return {
        cartLoad: cartLoad
    }
})
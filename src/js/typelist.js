define((['jquery', 'paging']), ($, paging) => {
    function typeList() {
        class ListWear {
            constructor() {
                this.ul = document.querySelector('#wear-list')
                this.init()
            }
            init() {
                this.request()
            }

            request() {
                $.get({
                    url: '../data/wear.json',
                    success: (res) => {
                        //console.log(res)
                        //console.log(typeof (res))
                        let data = JSON.stringify(res)
                        data = JSON.parse(data)

                        this.render(data)

                        $("#wear-list").paging({
                            PageNum: 9, //每页显示数目
                            pageMax: true, //按钮长度是否显示
                            pageMaxHideShow: false, //在最后一个的时候是否隐藏按钮长度
                            pageDownUpHide: false, //到第一个或最后一个是否让上一页或下一页消失
                            pageInput: true, //是否使用文本框输入跳转
                            pagingBtnHide: false, //是否让按钮变为一个
                            pagingBtnPaging: true,//按钮是否分页
                            pagingDisplay: "flex"//显示的属性，弹性盒子还是块化
                        })

                    }

                })
            }
            //
            render(data) {
                data.forEach(item => {
                    this.ul.innerHTML += `
                    <li>
                    <img src="${item.pic1}" alt="">
                    <p class="price">￥${item.price}</p>
                    <h3 class="product-title">${item.title}                    
                    </h3>
                    <a class="des" data-id=${item.goods_id} href="details.html">立即购买</a>
                </li>
                `
                })
            }
        }

        new ListWear()

    }
    return {
        typeList: typeList
    }

})
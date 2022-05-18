define((['jquery', 'swiper', 'paging']), ($, Swiper, paging) => {
    function indexLoad() {
        var swiper = new Swiper(".mySwiper", {
            autoplay: {
                delay: 2000,//1秒切换一次
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        });
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
                            PageNum: 4, //每页显示数目
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
            // href="../html/details.html
            render(data) {
                data.forEach(item => {
                    this.ul.innerHTML += `
                <li data-id=${item.goods_id} class="list1" id="list1">
                <img src="${item.pic1}" alt="">
                <h5 class="product-name">${item.title}</h5>
                <p class="des">￥${item.price}</p>
                <a data-id=${item.goods_id} href="../html/details.html">立即选购</a>

            </li>
                `
                })
            }
        }
        new ListWear()

        class listShoes {
            constructor() {
                this.ul = document.querySelector('#list-shoes')
                this.init()
            }
            init() {
                this.request()
            }
            request() {
                $.get({
                    url: '../data/shoes.json',
                    success: (res) => {
                        //console.log(res)
                        //console.log(typeof (res))
                        let data = JSON.stringify(res)
                        data = JSON.parse(data)
                        data = data.slice(0, 8)
                        this.render(data)
                    }

                })
            }
            render(data) {
                data.forEach(item => {
                    this.ul.innerHTML += `
                <li data-id=${item.id}><img src="${item.pic1}" alt="">
                <div class="product-name">${item.title}</div>
            </li>
            `
                })
            }
        }
        new listShoes()
        $('#list-shoes').click(() => {
            location.href = '/html/typelist.html'
        })
    }

    return {
        indexLoad: indexLoad
    }

})
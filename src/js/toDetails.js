define((['jquery']), ($) => {
    function toDetailsLoad() {

        $.get({
            url: '../data/wear.json',
            success: (res) => {
                var data = JSON.stringify(res)
                data = JSON.parse(data)

                // console.log(data)
                $('#wear-list').click(e => {
                    //如果有就删除localStorage的数据
                    if (localStorage.getItem('details')) {
                        localStorage.removeItem('details')
                    }
                    e = e || window.event
                    let target = e.target || e.srcElement
                    if (target.nodeName == 'A') {
                        let goods_id = target.dataset.id - 0
                        //找到对应的数据
                        let goods = data.find(item => { return item.goods_id == goods_id })
                        //console.log(goods)
                        //将这条数据放在details的localStorage里面
                        localStorage.setItem('details', JSON.stringify(goods))

                    }
                })
            }
        })

    }
    return {
        toDetailsLoad: toDetailsLoad
    }
})
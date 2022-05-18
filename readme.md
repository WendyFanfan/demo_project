# 原生开发-仿阿迪官方网站搭建

项目参照网站原址：https://www.adidas.com.cn/

### 技术栈：

###### 前端：

- html  css   JavaScript    Jquery

###### 前后端交互：

- API接口     ajax

###### 开发构件：

- Gulp:自动化工具
- sass:css预编译工具
- require.js:模块化工具（项目符合AMD模块规范）

###### 插件：

- Jquery库
- Jquery-page :分页插件
- bootstrap：UI框架、JS组件
- swiper:轮播插件

### 网站页面

###### 首页（index）：

- 顶部导航
- 登录显示欢迎用户，未登录提示登录信息
- 搜索框下拉列表，通过后台数据渲染获取
- 商品数据渲染，跳转至项目详情页，加入购物车功能
- 分页，利用jquery-paging插件实现分页
- banner图轮播，利用swiper插件
- 头尾部复用

###### **登录页面(login)**

- 完成表单正则验证、非空验证

- 将用户信息存入本地localStorage


###### **注册页面(register)**

- 表单验证、非空验证

- 从localStorage获取信息


###### **线下门店(map)**

利用高德开放平台API，获得附近线下实体店信息，渲染数据

两个API接口：

amap: "https://webapi.amap.com/maps?v=1.4.15&key=3f547ad7612ec20c3ebfea705e720c15&callback=onAMapLoaded",



API: "https://restapi.amap.com/v3/place/text?key=4142491c231f33723ecfce4d0c8e59be&keywords=阿迪达斯&types=购物服务&city=510100&children=1&offset=20&page=1&extensions=all&output=json",



###### **商品列表（typelist）**

- 渲染商品数据
- 分页结构

###### **商品详情页（details）**

- 拿取商品详情信息（localStorage里的detalis）
- 选择商品尺码，数量等
- 加入购物车

###### **购物车页面（cart）**

- 渲染已加入购物车商品数据，选取购买商品，单选，全选，选取数量，结算等

###### **已购买商品快递页（delivery**）

- 渲染已购买商品数据，利用bootstrap模态框
- 快递API：http://route.showapi.com/2650-3
- 渲染快递数据

### JSON数据

- manwear.json 下拉列表的男装数据
- womanwear.json下拉列表的女装数据
- manshoes.json下拉列表的男鞋数据
- womanshoes.json下拉列表的女鞋数据
- child.json下拉列表的儿童数据
- wear.json商品（衣服）数据
- shoes.json商品（鞋子）数据

### 项目部署（gulp）

部署地址：http://localhost:8887/





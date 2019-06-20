// url 地址转为一个对象
let url = new URL(location.href)
console.log(url.searchParams)
console.log(url.searchParams.get('pid'))
console.log(location)
let id = url.searchParams.get('pid')

//根据 pid  获取商品详情

axios.get(getGoodsItemApi, { params: { id } }).then(res => {
    console.log(res.data)

    let p = res.data.data;




    let desc01 = document.querySelector('.desc-01')
    console.log(desc01)
    desc01.innerHTML = p.pdesc

    let name = document.querySelector('.name')
    let desc = document.querySelector('.desc')
    desc.innerHTML = p.pdesc
    name.innerHTML = p.pname
    let price02 = document.querySelector('.price-02')
    price02.innerHTML = p.pprice


    let imgs = document.querySelector('.imgs img')
    imgs.src = p.pimg
    console.log(imgs)

    let imglist = document.querySelector('.img-list img')
    imglist.src = p.pimg
})

















//加入购物车的使用  addGoodsApi 接口 
//给加入购物车按钮加点击事件 调用接口
let btt = document.querySelector('.btt')
console.log(btt)
let pnumIpt = document.querySelector('.pnum')
console.log(pnumIpt)
btt.onclick = function () {
    let pid = id
    let uid = localStorage.getItem('token')
    let pnum = pnumIpt.value;//获取文本框商品数量
    let params = { pid, uid, pnum }
    axios.get(addGoodsApi, { params }).then(res => {

        console.log(res)
        alert('添加成功')
        location.href = 'cart.html'
    })
}



//加减按钮
let addBtn = document.querySelector('.add')
let subBtn = document.querySelector('.sub')
addBtn.onclick = function () {

    pnumIpt.value = parseInt(pnumIpt.value) + 1

    console.log(pnumIpt.value)

}
subBtn.onclick = function () {
    console.log(pnumIpt.value)
    if (pnumIpt.value == 1) {
        return;
    }
    pnumIpt.value = parseInt(pnumIpt.value) - 1
}

let cartadd= document.querySelector('.cart-add')
cartadd.onclick=function(){
    location.href = 'https://mall.sogou.com/goods/order/133403559302529024'
}
yonghu.innerHTML=username
           

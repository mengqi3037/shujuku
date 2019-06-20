let token = localStorage.getItem('token')
let username = localStorage.getItem('username')
let oncli = document.querySelector('.on-cli')
let areg = document.querySelector('.a-reg')
let user = document.querySelector('.user')
let btn = document.querySelector('.btn')
//如果已经登录 第一个div 显示
if (token) {

    oncli.style.display = 'none'
    areg.style.display = 'none'
    user.style.display = 'block'
    
} else {
    oncli.style.display = 'block'
    areg.style.display = 'block'
    user.style.display = 'none'
}
btn.onclick=function(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    location.href = 'login.html'
}
var nlist = document.querySelectorAll('.active')

var divs = document.querySelectorAll('.panel')
console.log(divs)
console.log(nlist)
for (let i = 0; i < nlist.length; i++) {
    console.log(nlist[i])

    nlist[i].onmousemove = function () {

        divs[i].style.display = "block"


    }
    nlist[i].onmouseout = function () {

        divs[i].style.display = "none "


    }

}
let uid = localStorage.getItem('token')
console.log(uid)
let data = null;
axios.get(cartListApi, {
    params: { id: uid }

}).then(res => {
    console.log(res.data)
    data = res.data.data
    let html = '';
    res.data.data.forEach(p => {
        html += `
        <li style="height:150px;width:1140px;display: flex;align-items: center;justify-content: space-around;border-bottom:3px solid #ccc;">

                <input style="width: 86px;height:13px;" type="checkbox" name="" id="" class="ck">
                <img style="width:100px;height:100px" src="${p.pimg}" alt="">
                <p style="width: 100px;text-align: center">${p.pname}</p>

                <p class="qq" style="width: 100px;text-align: center">${p.pprice}</p>
                <div>
                <input style="width:30px;height:30px;" data-id="${p.pid}"
                    type="button" value='-' class="sub">
                <input style="width:70px;height:30px;" type="text"
                    value="${p.pnum}" class="pnum">
                <input style="width:30px;height:30px;" data-id="${p.pid}"
                    type="button" value='+' class="add">
                    </div>
                    <span class="sp" style="width:30px;height:30px;">

                    ${(p.pnum) * (p.pprice)}
                </span>

                <input style="width:30px;height:30px;" data-id="${p.pid}"
                    type="button" value='删除' class="dd">
            </li>
        
        `

    })
    let list = document.querySelector('.list')
    list.innerHTML = html


    var a = 0





    //删除按钮的点击事件 添加的商品可能有多个，有多个列表先遍历一下下, 在连接接口刷新数据 取得用户 id 商品ID 
    let dbtn = document.querySelectorAll('.dd')
    console.log(dbtn)
    for (let i = 0; i < dbtn.length; i++) {
        console.log(1234)
        dbtn[i].onclick = function () {
            let pid = this.getAttribute('data-id')
            let params = { pid, uid }
            axios.get(cartDelApi, { params }).then(res => {
                console.log(res.data)

                this.parentNode.remove()
                data = data.filter(v => v.pid != pid)
                // data.splice(i,1)
                count()
            })

        }
    }







    //加减按钮的操作

    let sub = document.querySelectorAll('.sub')
    let add = document.querySelectorAll('.add')
    for (let i = 0; i < sub.length; i++) {
        sub[i].onclick = function () {
            let pnumIpt = this.parentNode.querySelector('.pnum')
            a = 1
            console.log(a)
            if (pnumIpt.value == 1) {
                return;
            }
            pnumIpt.value = parseInt(pnumIpt.value) - 1;
            // 更新购物车商品  接口参数：
            //   uid  用户id
            //   pid  商品id
            //   pnum  要添加的商品数量

            data[i].pnum = pnumIpt.value
            let pid = this.getAttribute('data-id')
            let pnum = pnumIpt.value
            let params = { pid, pnum, uid }
            axios.get(updateCartApi, { params }).then(res => {


                console.log(res.data)
                count()
                // count02()
                location.href = 'cart.html'
            })
        }
    }
    //'+'按钮操作
    for (let i = 0; i < add.length; i++) {
        add[i].onclick = function () {
            let pnumIpt = this.parentNode.querySelector('.pnum')
            // if (pnumIpt == 1) {
            //     return;
            // }
            pnumIpt.value = parseInt(pnumIpt.value) + 1;
            console.log(pnumIpt.value)
            // 更新购物车商品  接口参数：
            //   uid  用户id
            //   pid  商品id
            //   pnum  要添加的商品数量 
            a = 1
            console.log(a)

            data[i].pnum = pnumIpt.value



            let pid = this.getAttribute('data-id')
            let pnum = pnumIpt.value
            let params = { pid, pnum, uid }
            axios.get(updateCartApi, { params }).then(res => {


                console.log(res.data)

            })
            console.log(pnum)

            count()
            location.href = 'cart.html'
            // count02()
        }
    }






    //单选按钮的控制，总价的计算

    let cks = document.querySelectorAll('.ck')
    for (let i = 0; i < cks.length; i++) {
        cks[i].onclick = function () {
            console.log(this.checked)

            let arr = [...cks];
            let flag = arr.every(v => {
                return v.checked == true;
            })
            if (flag == true) {
                allSel.checked = true
            } else {
                allSel.checked = false

            }

            count()







        }
    }


})


let allSel = document.querySelector('#all-select')
// console.log(cks)

allSel.onclick = function () {
    let cks = document.querySelectorAll('.ck')

    console.log(this.checked)

    console.log(cks)
    for (let i = 0; i < cks.length; i++) {
        if (this.checked) {
            cks[i].checked = true;
        } else {
            cks[i].checked = false;
        }

    }
    count()




}




// let spp = document.querySelector('.sp')
// console.log(spp)
// let qq = document.querySelector('.qq')
// let ppce = qq.innerHTML
// console.log(ppce)
// let pnumss = document.querySelector('.pnum')
// let pnums = parseInt(pnumss.value)
// console.log(pnums)
// if (a = 1) {
//     console.log(111)
//     axios.get(updateCartApi, { params }).then(res => {


//         console.log(res.data)
//         spp.innerHTML =pnum*(p.price)
//         console.log(spp.innerHTML)

//     })
// }


function count() {
    let countNum = 0;
    let countPirce = 0;

    let cks = document.querySelectorAll('.ck')
    console.log(cks)
    for (let i = 0; i < cks.length; i++) {
        let ck = cks[i]
        console.log(ck)
        console.log(ck.checked)
        if (ck.checked) {
            //ck 对应的这一行  商品
            // console.log(i)
            // console.log(data[i])
            let p = data[i]

            //单价和  数量 都从页面取
            // 
            let btnn = document.querySelector('.btnn')
            console.log(btnn)
            console.log(222)
            btnn .onclick = function () {
                location.href = 'https://mall.sogou.com/goods/order/134053868899139584'

            }
            countNum += parseInt(p.pnum)
            console.log(parseInt(p.pnum))
            countPirce += parseInt(p.pnum) * parseFloat(p.pprice);
            console.log(countPirce)
        }
    }

    console.log(countNum, countPirce)
    let countNumSpan = document.querySelector('.count-num')
    let countPriceSpan = document.querySelector('.count-price')
    countNumSpan.innerHTML = countNum;
    countPriceSpan.innerHTML = countPirce
    console.log(countNumSpan.innerHTML)

}


// function count02() {
//     let countNum2 = 0;
//     let countPirce2 = 0;

//     let cks = document.querySelectorAll('.ck')
//     console.log(cks)
//     for (let i = 0; i < cks.length; i++) {
//         let ck = cks[i]
//         console.log(ck)
//         console.log(ck.checked)
//         if (ck.checked) {
//             //ck 对应的这一行  商品
//             // console.log(i)
//             // console.log(data[i])
//             let p = data[i]
//             console.log(p)

//             //单价和  数量 都从页面取
//             // 

//             countNum2 = parseInt(p.pnum)
//             console.log(parseInt(p.pnum))
//             countPirce2 = parseInt(p.pnum) * parseFloat(p.pprice);
//             console.log(parseFloat(p.pprice))
//             console.log(countPirce2)
//         }
//     }

//     console.log(countNum2, countPirce2)
//     let countNum2Span = document.querySelector('.sp')
//     let countPrice2Span = document.querySelector('.sp')
//     countNum2Span.innerHTML = countNum2;
//     countPrice2Span.innerHTML = countPirce2
//     console.log(countNum2Span.innerHTML)

// }


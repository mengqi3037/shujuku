let token = localStorage.getItem('token')
let username = localStorage.getItem('username')
let oncli = document.querySelector('.on-cli')
let areg = document.querySelector('.a-reg')
let yonghu = document.querySelector('#yonghu')
let btn = document.querySelector('.btn')
//如果已经登录 第一个div 显示
if (token) {

    oncli.style.display = 'none'
    areg.style.display = 'none'
    yonghu.style.display = 'block'
    btn.style.display='block'

} else {
    oncli.style.display = 'block'
    areg.style.display = 'block'
    yonghu.style.display = 'none'
    btn.style.display='none'
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
btn.onclick = function () {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    location.href = 'login.html'
}
console.log(username)

yonghu.innerHTML=username



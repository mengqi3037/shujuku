var a = 0;
var b = 0;
var ipts = document.querySelectorAll('input')
console.log(ipts)
ipts[0].onblur = function () {
    if (/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(ipts[0].value)) {
        console.log('格式正确')
        a = 1
    } else {
        document.getElementById("s1").innerHTML = "输入有误";
    }
    check()
}


ipts[1].onblur = function () {


    if (/\d{6,18}/.test(ipts[0].value) || /[a-z]{6,18}/.test(ipts[0].value)) {
        console.log('格式正确')
        b = 1
    } else {
        console.log('格式不对')
        document.getElementById("s1").innerHTML = "输入有误";
    }
    check()
}




function check() {


    if (a == 1 & b == 1) {

        btn.disabled = false

    } else {
        btn.disabled = true
    }
}
ipts[2].onclick = function () {

    axios.get(regApi, {
        params: {
            username: ipts[0].value,
            password: ipts[1].value
        }
    }).then(res => {
        console.log(res)
        if (res.data.code == 1) {
            alert(res.data.msg)
            location.href = 'login.html'
            localStorage.setItem('username',res.data.data.username)
        } else {
            alert(res.data.msg)
        }
    }).catch(error => {
        console.log(error)
    })
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











        
//         <li><a href=""><img
//                     src="https://mall02.sogoucdn.com/image/2018/12/27/20181227141313_4287.png" /></a>
//         </li>
//         <li><a href=""><img
//                     src="https://mall02.sogoucdn.com/image/2018/12/27/20181227141313_4287.png" /></a>
//         </li>
//         <li><a href=""><img
//                     src="https://mall02.sogoucdn.com/image/2018/12/27/20181227141313_4287.png" /></a>
//         </li>
//         <li><a href=""><img
//                     src="https://mall02.sogoucdn.com/image/2018/12/27/20181227141313_4287.png" /></a>
//         </li>
//         <li><a href=""><img
//                     src="https://mall02.sogoucdn.com/image/2018/12/27/20181227141313_4287.png" /></a>
//         </li>
//         <li><a href=""><img
//                     src="https://mall02.sogoucdn.com/image/2018/12/27/20181227141313_4287.png" /></a>
//         </li>
//         `
//     }
   
//     this.onmouseout = function () {

//     }
// }



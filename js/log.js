let ipts = document.querySelectorAll('input')

ipts[2].onclick = function () {

    axios.get(loginApi, {
        params: {
            username: ipts[0].value,
            password: ipts[1].value
        }
    }).then(res => {
        console.log(res)
        if (res.data.code == 1) {
            alert(res.data.msg)
            localStorage.setItem('token', res.data.data.id)
            localStorage.setItem('username', res.data.data.username)
            
            location.href = 'index.html'
        } else {
            alert(res.data.msg)
        }
    }).catch(error => {
        console.log(error)
    })
}
// console.log(res.data.data.username)






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



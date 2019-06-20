let pagenum = 0
let obj = {}
if (token) {
    obj.uid = token
}

loadData()

function loadData() {
    axios.get(proListApi, {
        params: obj
    }).then(res => {
        console.log(res)
        let html = ''
        res.data.data.forEach(p => {
            html += `

         <a href="item.html?pid=${p.pid}" 
        style="display:flex;flex-direction: column;align-items: center;width:240px;height:330px;
        margin:10px 10px;background:#f5f5f5">
        <img src="${p.pimg}" alt="糖猫M2" style="width:240px;height:240px">
        <span class="name" title="糖猫M2">${p.pname}</span>
        <span class="desc" title="4G视频通话，3秒极速定位">${p.pdesc}</span>
        <span class="price">
            <span class="currPrice" style="color:red">¥${p.pprice}</span>
        </span>
            
            
        </a>
    
    `
  
        });
        let list = document.querySelector('.list')
        list.innerHTML = html;
        

    })
}

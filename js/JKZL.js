
let gg1 ='http://dev.taobao.com'
let gg2 = 'http://jx.xuzhixiang.top/ap/api'
let dev = false;
let host = dev?gg1:gg2;

let regApi =host+'/reg.php'//注册接口获取 username password
let loginApi = host+'/login.php'//登录接口 username password


let proAllListApi = host+'/allproductlist.php'//连接所有的商品
let proListApi = host+'/productlist.php'//连接商品列表，可以看到首页商品
let goodsDelApi = host+'/goods/goods-delete.php'//删除商品的借口
let goodsAddApi = host+'/goods/goods-add.php'//添加商品的接口

// 根据商品id获取商品详情接口
    //  接口地址：http://jx.xuzhixiang.top/ap/api/detail.php
    let getGoodsItemApi = host+'/detail.php'


    // 给用户购物车中添加商品 接口
        //  接口地址：http://jx.xuzhixiang.top/ap/api/add-product.php
    
    let addGoodsApi = host+'/add-product.php'
    
    
    // 查询用户购物车中的商品 接口
        //  接口地址：http://jx.xuzhixiang.top/ap/api/cart-list.php
    
    let cartListApi = host+'/cart-list.php'
    
    
    /** 
     * 
     * 删除用户购物车中的商品 接口
         接口地址：http://jx.xuzhixiang.top/ap/api/cart-delete.php
         接口请求方式：get
         接口参数：
              uid  用户id
              pid  商品id
              
     * 
    */
    
    let cartDelApi = host+'/cart-delete.php'
    
    
    /**
 * 
 * 更新购物车中商品数量 接口
     接口地址：http://jx.xuzhixiang.top/ap/api/cart-update-num.php
     接口请求方式：get
     接口参数：
          uid  用户id
          pid  商品id
          pnum  要添加的商品数量
          
 * 
 */
let updateCartApi = host+'/cart-update-num.php'






    
    


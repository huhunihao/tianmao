$(function () {
    $('#yourname').html(cookie.get('username'))
    var shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);

        var idList = shop.map(elm => elm.id).join();
        $.ajax({
            type: "get",
            url: "../lib/shop.php",
            data: {
                'idList': idList
            },
            dataType: "json",
            success: function (response) {
                response.forEach(function (elm) {
                    var pic = JSON.parse(elm.pic);
                    var arr = shop.filter((val, i) => {
                        return val.id == elm.id
                    })
                    var template = `
                <li>
                <div class="itmBox">
                    <div class="itmConBox">
                        <input type="checkbox" name="checkbox" class="itmCheckbox" id="p-${elm.id}">
                        <div class="itmCellTit">
                            <a href="javascript:;" class="itmImgBox">
                                <img src="${pic[0].src}" alt="${pic[0].title}">
                            </a>
                            <div class="childBox">
                                <a href="javascript:;" class="titText"> ${elm.title}</a>
                               
                            </div>
                        </div>
                        <div class="itmProps">
                            <div class="ov" title="【性价比大神】 清凉不等待">${elm.details}</div>
                        </div>
                        <div class="itmPrice">
                            <strong>¥${elm.price}</strong>
                        </div>
                        <div class="itmQuantity">
                            <a href="javascript:;" class="subItm">-</a>
                            <input type="text" value="${arr[0].num}" class="itmRes">
                            <a href="javascript:;" class="addItm">+</a>
                            <div>库存10000件</div>
                        </div>
                        <div class="itmSum">
                            <strong>¥${elm.price}</strong>
                        </div>
                        <div class="cell">
                            <a href="javascript:;" class="itmDel">删除</a>
                            <a href="javascript:;" class="itmRemove">移到我的收藏</a>
                        </div>
                    </div>
                </div>
                </li>
                `
                    $('.cart-content').append(template);
                })
            }
        });
    }
    //购物车小计
    $('body').on('click','.addItm',function(){
        var num = $(this).parents('.itmQuantity').children('.itmRes').val();
        num++;
        $(this).parents('.itmQuantity').children('.itmRes').val(num)
        $(this).parents('.itmConBox').children('.itmSum').children('strong').html('¥'+$(this).parents('.itmConBox').children('.itmPrice').children('strong').html().substr(1)*num) ;
        check()   
    })
    $('body').on('click','.subItm',function(){
        var num = $(this).parents('.itmQuantity').children('.itmRes').val();
        if(num<=1){num=1}
        num--;
        $(this).parents('.itmQuantity').children('.itmRes').val(num);
        $(this).parents('.itmConBox').children('.itmSum').children('strong').html('¥'+$(this).parents('.itmConBox').children('.itmPrice').children('strong').html().substr(1)*num)
        check()
    })
    // 商品件数和总价
    $('body').on('click','.itmCheckbox',function(){
        check()
    })
    function check(){
        var sum_num=0;
        var sum_price=0;
        $('.itmCheckbox').each(function(i,elm){
            if(elm.checked){
                var tem=Number($(this).parents('.itmConBox').children('.itmQuantity').children('.itmRes').val())
                var pri=Number($(this).parents('.itmConBox').children('.itmSum').children('strong').html().substr(1))
                sum_num+=tem;  
                sum_price+=pri;
            }
            $('.jdFont').html(sum_num);
            $('.priceSum>em').html('¥'+sum_price);
        })

    }
    // 删除商品
    $('body').on('click','.itmDel',function(){
        var index=$(this).parents('.itmConBox').children('.itmCheckbox').attr('id').substr(2)
        // console.log($.parseJSON(cookie.get('shop')))
        $.parseJSON(cookie.get('shop')).forEach(function(elm,i){
            if(elm.id==index){
                var shop= $.parseJSON(cookie.get('shop'))
               shop.splice(i,1);
              cookie.set('shop',JSON.stringify(shop),1)
                location.reload();
            }
        })
    })
    // 清空购物车
    $('body').on('click','.removeAllItems',function(){
        if(confirm("是否清空购物车")){
            cookie.remove('shop');
            location.reload();
        }
    })
    // 去结算
    $('body').on('click','.buySubBtn',function(){
        if(confirm("确认购买么？请小心您的荷包哦~")){
            alert("您的钱包已清空")
            cookie.remove('shop');
            location.reload();
        }
    })
})
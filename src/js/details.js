$(function(){
    var id=location.search.split('=')[1]
    $.ajax({
        type: "get",
        url: "../lib/details.php",
        data: {
            id:id
        },
        dataType: "json",
        success: function (response) {
            var pic=JSON.parse(response.pic);
            console.log('ok')
            var template=`
            <div class="DetailMeta">
                <div class="tb-property">
                    <div class="tb-wrap">
                        <div class="tb-detail-hd">
                            <h1>
                                ${response.title}
                            </h1>
                            <p class="newp">
                                定制产品 恕不支持七天无理由 默认顺丰
                            </p>
                            <div class="tm-fcs-panel">
                                <dl>
                                    <dt>价格</dt>
                                    <dd>
                                        <em>¥</em>
                                        <span>${response.price}</span>
                                    </dd>

                                </dl>
                            </div>
                            <div class="tb-meta">
                                <dl>
                                    <dt>运费</dt>
                                    <dd>
                                        <div class="tb-postAge">
                                            <span class="mui_addr_tri">
                                                <span class="mui_addr_tri_1">
                                                    杭州
                                                    <i class="tm-detail-font"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <ul class="tm-ind-panel">
                                <li class="tm-ind-item tm-ind-reviewCount canClick tm-line3">
                                    <div class="tm-indcon">
                                        <span class="tm-label">累计评价</span>
                                        <span class="tm-count">895</span>
                                    </div>
                                </li>
                                <li class="tm-ind-item tm-ind-emPointCount">
                                    <div class="tm-indcon">
                                        <a href="javascript:;">
                                            <span class="tm-label">送天猫积分</span>
                                            <span class="tm-count">209</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <div class="tb-key">
                                <div class="tb-skin">
                                    <div class="tb-sku">
                                        <dl class="tb-prop tm-sale-prop clear tm-img-prop">
                                            <dt class="tb-metatit">颜色分类</dt>
                                            <dd>
                                                <ul>
                                                    <li>
                                                        <a href="javascript:;"
                                                            style="background:url(${pic[0].src}) center no-repeat;background-size:cover;"></a>
                                                        <i>已选中</i>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                        <dl class="tb-prop tm-sale-prop clear ">
                                            <dt class="tb-metatit">套餐类型</dt>
                                            <dd>
                                                <ul>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span>套餐一</span>
                                                        </a>
                                                        <i>已选中</i>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                        <dl class="tb-amount clear">
                                            <dt class="tb-metatit">数量</dt>
                                            <dd class="amount">
                                                <span class="tb-amount-widget mui-amount-wrap">
                                                    <input type="text" class="tb-text mui-amount-input" value="1"
                                                        maxlength="8" title="请输入购买量">
                                                    <span class="mui-amount-btn">
                                                        <span class="tm-detail-font mui-amount-increase"></span>
                                                        <span class="tm-detail-font mui-amount-decrease"></span>
                                                    </span>
                                                    <span class="mui-amount-unit">件</span>
                                                </span>
                                            </dd>
                                        </dl>
                                        <div class="tb-action clear">
                                            <div class="tb-btn-buy tb-btn-sku">
                                                <a href="./cart.html" class="LinkBuy">立即购买</a>
                                            </div>
                                            <div class="tb-btn-basket tb-btn-sku">
                                                <a href="./cart.html" class="LinkBasket">
                                                    <i class="tm-detail-font"></i>
                                                    加入购物车
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tm-ser clear">
                                <dl>
                                    <dt>服务承诺</dt>
                                    <dd>
                                        <ul>
                                            <li>
                                                <a href="javascript:;">正品保证</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">极速退款</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">七天无理由退换</a>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <div class="tm-pay-box">
                                    <div class="tm-pay">
                                        <em class="pay-title">支付方式</em>
                                        <em class="pay-toggler tm-detail-font"></em>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-right:10px;color:#999">检测到您当前处于非安全网络环境，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息。
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tb-gallery">
                    <div class="tb-booth">
                        <div class="fdjBox">
                            <!-- <span class="zoomIcon tm-detail-font">󰄬</span>
                            <span class="ks-imagezoom-wrap"> -->
                            <div id="magnifier">
                                <div class="small-box">
                                    <img src="${pic[0].src}" alt="${pic[0].title}">
                                    <span class="hover" style="display: none; width: 303.75px; height: 303.75px; left: 0px; top: 146px;"></span>
                                </div>
                                <div class="thumbnail-box">
                                    <a href="javascript:;" class="btn btn-prev"></a>
                                    <a href="javascript:;" class="btn btn-next"></a>
                                    <div class="list">
                                        <ul class="wrapper">
                                            <li class="item item-cur" data-src="${pic[0].src}"><img src="${pic[0].src}" alt="${pic[0].title}"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="big-box" style="display: none;">
                                    <img src="${pic[0].src}" alt="${pic[0].title}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
            $('.LinkBuy,.LinkBasket').on('click',function(){
                
            })
            $('.detail').append(template).find('.LinkBuy,.LinkBasket').on('click',function(){
                addShopCart(response.id,response.price,$('.tb-text').val());
            });
            var num=$('.tb-text').val();
            $('.mui-amount-increase').on('click',function(){ 
                $('.tb-text').val(num++);
            })
            $('.mui-amount-decrease').on('click',function(){
                if(num<=1){
                    num=1
                }
                $('.tb-text').val(num--);
            })

           
        }
    });
    function addShopCart(id,price,num){
        var shop=cookie.get('shop');
        var product={
            "id":id,
            "price":price,
            "num":num
        }
        if(shop){
            shop=JSON.parse(shop);
            if(shop.some(elm=>elm.id==id)){
                shop.forEach(function(elm,i){
                    elm.id==id?elm.num=num:null;
                })
            }else{
                shop.push(product);
            }
            cookie.set('shop',JSON.stringify(shop),1);
        }else{
            shop=[];
            shop.push(product);
            cookie.set('shop',JSON.stringify(shop),1)
        }
    }
})
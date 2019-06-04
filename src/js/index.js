$(function () {
    $.ajax({
        type: "get",
        url: "../lib/index.php",
        // data: "data",
        dataType: "json",
        success: function (response) {
            response.forEach(function(elm,i){
                var pic=JSON.parse(elm.pic)
                var template=`
                <a href="./details.html?id=${elm.id}" class="grid one-grid-price">
                <div class="floor-item-content-wrap">
                    <div class="floor-item-tag color-type-green" style="visibility:hidden"></div>
                    <img src="${pic[0].src}" data-original="${pic[0].src}" class="floor-item-img">
                    <div class="floor-item-title">${elm.title}</div>
                    <div class="floor-price">￥${elm.price}</div>
                </div>
            </a>
                `
                $('.middle-column-con').append(template);
            })
        }
    });
    // 左侧导航条category的悬浮效果
    $('.category-wrapper>ul>li').hover(function () {
        var i = $(this).index('.category-wrapper>ul>li');
        $(this).addClass('selected').css('color', $('.pannel-' + i + ' .highlight').css('color'));
        $(this).children('a').css('color', $('.pannel-' + i + ' .highlight').css('color'));
        $('.category-content,.pannel-' + i).removeClass('category-hide').addClass('category-show');
    }, function () { 
        var i = $(this).index('.category-wrapper>ul>li');
        $(this).removeClass('selected').css('color', '#fff');
        $(this).children('a').css('color', '#fff');
        $('.category-content,.pannel-' + i).removeClass('category-show').addClass('category-hide');
    })
    // 右侧导航条mallbar的悬浮效果
    $('.mallbar-mask>div').hover(function () {
        $('.mall-tip').stop(true, true);
        $(this).css('background-color', '#FF0036');
        if ($(this).children('.mallbar-cart-border')) {
            $(this).children('.mallbar-cart-border').css('border-color', '#FF0036');
            $(this).children('.mallbar-cart-img').css('background', 'url(../img/cart2.png)')
        }
        $(this).children('.mall-tip').css('display', 'block').stop().animate({
            'opacity': '1',
            'right': '35px'
        }, 500)
    }, function () {
        $(this).css('background-color', '#000');
        if ($(this).children('.mallbar-cart-border')) {
            $(this).children('.mallbar-cart-border').css('border-color', '#444');
            $(this).children('.mallbar-cart-img').css('background', 'url(../img/cart.png)')
        }
        $(this).children('.mall-tip').stop().animate({
            'opacity': '0',
            'right': '70px'
        }, 300, function () {
            $(this).css('display', 'none')
        });
    })
    // 轮播图
    $('#slider').slider();
    //天猫超市选项卡悬浮特效
    $('.floor-tab-head>li').hover(function () {
        var i = $(this).index('.floor-tab-head>li');//注意index(里面是选择器或元素)
        $(this).addClass('floor-current-tab').siblings().removeClass('floor-current-tab');
        $($('.floor-tab-content>div')[i]).removeClass('floortab-hide').siblings().addClass('floortab-hide');
        clearInterval('timer');
    }, function () { tab();})
    // 天猫超市选项卡定时器特效
    function tab() {
        var j = 1;
        var timer=setInterval(function () {
            $($('.floor-tab-head>li')[j]).addClass('floor-current-tab').siblings().removeClass('floor-current-tab');
            $($('.floor-tab-content>div')[j]).removeClass('floortab-hide').siblings().addClass('floortab-hide');
            j--;
            if(j==-1){j=1};
        }, 2000)
    }
    tab();
    // 回到顶部
    $('.mallbar-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });
    $("img.lazy").lazyload({
        effect: "fadeIn",
        placeholder:"../img/loading.gif",
        threshold: 200
    });
    
})
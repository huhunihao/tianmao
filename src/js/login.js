$(function () {
    
    $('.btn').on('click', function () {
        var username = $('#username').val();
        var password = $('#password').val();
        $.ajax({
            type: "get",
            url: "../lib/login.php",
            data: {
                username: username,
                password:password
            },
            // dataType: "json",
            success: function (response) {
               
                if(response){
                    cookie.set('isLogin','true',1);
                    cookie.set('username',username,1);
                    alert('登陆成功，点击跳转');
                    location.href='../lib/info.php';
                }else{
                    alert('登录失败，点击跳转');
                    // location.href='./login.html';
                }
            }
        });
    })
})
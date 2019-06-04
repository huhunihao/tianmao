<?php
    //登录的业务逻辑
    //1.连接数据库
    //2.获取前端传过来的数据
    //3.在数据库中查询数据
    //4.存在并且用户名密码都正确，则登录成功，否则失败
    //5.如果成功，跳转到主页，如果失败，跳回到登录页
    
    //第一步：连接数据库
    //包含1.连接数据库，设置编码，选择数据库
    include('./conn.php');
    // 第二步：获取前端传过来的数据
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];
    // 第三步：在数据库中查询数据
    $sql="select * from users where user_name='$username' and user_pwd='$password'";
    // 执行sql语句
    $result=$mysqli->query($sql);
    // 如果成功，跳转到主页，如果失败，跳回到登录页
    if($result->num_rows>0){
        // echo "<script src='../js/cookie.js'></script>";
        // echo "<script>cookie.set('isLogin','true',1);cookie.set('username','$username',1);</script>";
        // echo "<script>alert('登陆成功，点击跳转');location.href='../lib/info.php'</script>";
        echo true;
    }else{
        // echo "<script>alert('登录失败，点击跳转');location.href='./login.html'</script>";
        echo false;
    };
?>
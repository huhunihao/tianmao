<?php
    //注册的业务逻辑：
    //1.连接数据库
    //2.接收前端传入的内容
    //3.查找前端给予的用户名在数据库中是否存在
    //（1）如果存在，注册失败
    //（2）如果不存在，则插入一条数据，注册成功

    //第一步：连接数据库
    //包含1.连接数据库，设置编码，选择数据库
    include('../lib/conn.php');
    //第二步：接收前端传入的内容
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];
    $email=$_REQUEST['email'];
    // $sex=$_REQUEST['sex'];
    // 第三步：查找前端给予的用户名在数据库中是否存在
    $sql="select * from users where user_name='$username'";
    // 执行sql语句
    $result=$mysqli->query($sql);
    // num_rows为$result对象里面的东西，可以用->访问
    //当用户名存在时，num_rows>0
    //当用户名不存在时，num_rows=0

    if($result->num_rows>0){
        die('用户名已存在');
    };

    // 当用户名不存在时，插入前端传入的数据
    $insertSql="insert into users(user_name,user_email,user_pwd)values('$username','$email','$password')";
    //执行sql语句
    $res=$mysqli->query($insertSql);
  
    // 如果登录成功，则跳转到登录页面
    if($res){
        // echo '<script>alert("注册成功");location.href="login.html";</script>';
        echo true;
    };
    //关闭连接（因为有最大连接数）
    $mysqli->close();
?>
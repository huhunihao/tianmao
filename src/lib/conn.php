<?php
    header("content-type:text/html;charset=utf-8");
    // 第一步：连接数据库
    $mysql_conf=array(
        'host'=>'localhost:3306',
        'db_user'=>'root',
        'db_pwd'=>'',
        'db'=>'h5_1903'
    );
    // @是用来屏蔽执行new时的报错
    $mysqli=@new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pwd']);
    // 判断是否连接到数据库，"->"表示1.调用函数 2.对象里的东西可以用->访问
    // 此次应该注意此函数为connect_errno
    if($mysqli->connect_errno){
        die('连接错误'.$mysqli->connet_errno);
    }
    // 第二步：设置编码，固定写法
    $mysqli->query("set names 'utf8';");
    // 第三步：选择数据库
    $select_db=$mysqli->select_db($mysql_conf['db']);
    // 检查数据库是否选择成功
    if(!$select_db){
        die('选择数据库错误'.$mysqi->error);
    }
?>
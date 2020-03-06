<?php
    header("Content-type:text/html;charset=utf-8"); 
    $uname=$_POST['username'];
    $upass=$_POST['password'];
    $link = mysqli_connect('localhost', 'root', '123456', 'lx');
    $sql = "SELECT * FROM `zxlogin` WHERE `username`='$uname' AND `password`='$upass'";
    $res = mysqli_query($link, $sql);
    $row = mysqli_fetch_assoc($res);
    mysqli_close($link);
    if ($row) {
        header('location: ./cart.html');
      } else {
        echo '用户名或密码错误!';
      }
?>
<?php

$db = mysqli_connect("localhost", "root", "", "yiyao");
$gid = $_REQUEST["gid"];
$sign = $_REQUEST["flag"];

if($sign == "plus"){
  $plusSql = "UPDATE `cart` SET `num`= `num`+ 1 WHERE `gid`=$gid";
  mysqli_query($db,$plusSql);
}elseif($sign == "reduce"){
  $reduceSql = "UPDATE `cart` SET `num`= `num`- 1 WHERE `gid`=$gid";
  mysqli_query($db,$reduceSql);
}elseif($sign == "remove"){    //清空购物车
  $removeSql = "TRUNCATE table `cart`";
  mysqli_query($db,$removeSql);
}elseif($sign == "del"){
  $delSql = "DELETE FROM `cart` WHERE gid = $gid";
  mysqli_query($db,$delSql);
}

?>
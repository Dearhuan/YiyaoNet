<?php

$db = mysqli_connect("localhost", "root", "", "yiyao");
$gid = $_REQUEST["gid"];
$title = $_REQUEST["title"];
$src = $_REQUEST["src"];
$price = $_REQUEST["price"];
$num = $_REQUEST["num"];
$comment = $_REQUEST["comment"];
$store = $_REQUEST["store"];

$sql = "SELECT * FROM `cart` WHERE `gid` = $gid";
$result = mysqli_query($db,$sql);
$flag = mysqli_num_rows($result);

//   更新
// UPDATE `cart` SET `num`= `num`+2 WHERE `gid`='972419';
if($flag == "0"){
  $sql = "INSERT INTO `cart` (`id`,`gid`,`title`,`src`,`price`,`num`, `store`,`isChecked`,`comment`) 
  VALUES (NULL, '$gid','$title','$src', '$price', '$num', '$store',0,'$comment');";
  mysqli_query($db,$sql);
}elseif($flag == "1"){
  $sql2 = "UPDATE `cart` SET `num`= `num`+$num WHERE `gid`=$gid";
  mysqli_query($db,$sql2);
}



?>
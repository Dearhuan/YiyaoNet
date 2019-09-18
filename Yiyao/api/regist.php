<?php
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$phone = $_REQUEST["phone"];

$db = mysqli_connect("127.0.0.1","root","","yiyao");
$sql = "SELECT * FROM userList WHERE username='$username'";

$result = mysqli_query($db,$sql);

$data = array("status"=>"error","data"=>array("msg"=>"注册失败"));
// print_r($data);
if(mysqli_num_rows($result) == "1"){
  $data["data"]["msg"] = "注册失败，该用户名已经存在";
  echo json_encode($data,true);
}else{
  $sql = "INSERT INTO `userList` (`id`, `username`, `phone`, `password`) VALUES (NULL, '$username', '$phone', '$password');";
  mysqli_query($db, $sql);
  $data["data"]["msg"] = "恭喜你，注册成功";
   $data["status"] = "success";
  echo json_encode($data, true);
}

// print_r($result);
?>
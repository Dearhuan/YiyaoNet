<?php
$db = mysqli_connect("localhost", "root", "", "yiyao");

$gid = $_REQUEST["gid"];

$sql = "SELECT * FROM `zhongyaolist` WHERE `gid` = $gid";

$result  =mysqli_query($db,$sql);

$data = mysqli_fetch_all($result, MYSQLI_ASSOC); //获取sql数据
$response = array("status"=>"success","data" => $data);
echo json_encode($response,true);
?>
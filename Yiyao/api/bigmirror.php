<?php
$db = mysqli_connect("localhost", "root", "", "yiyao");

$gid = $_REQUEST["gid"];

// $sql = "SELECT * FROM `bigmirror` WHERE `gid` = $gid";
$sql = "SELECT * FROM bigmirror";

$result  =mysqli_query($db,$sql);

// print_r($result);

$data = mysqli_fetch_all($result, MYSQLI_ASSOC); //获取sql数据
$response = array("status"=>"success","data" => $data);
echo json_encode($response,true);
?>
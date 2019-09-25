<?php
$db = mysqli_connect("localhost", "root", "", "yiyao");

$sql = "SELECT * FROM `cart`";

$result  =mysqli_query($db,$sql);

$data = mysqli_fetch_all($result, MYSQLI_ASSOC); //获取sql数据
$response = array("status"=>"success","data" => Array("store"=>$data[0]["store"],"goods"=>$data));
echo json_encode($response,true);
// print_r($response);
?>
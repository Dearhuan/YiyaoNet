<?php
$db = mysqli_connect("localhost", "root", "", "yiyao");

$sql = "SELECT * FROM `cart`";

$result  =mysqli_query($db,$sql);

$data = mysqli_fetch_all($result, MYSQLI_ASSOC); //获取sql数据

$num = count($data);

if($num>0){
  $response = array("status"=>"success","data" => array("store"=>$data[0]["store"],"goods"=>$data));
  echo json_encode($response,true);
}else{
  $response = array("status"=>"none","data"=>$data);
  echo json_encode($response,true);
}

// print_r($response);
?>
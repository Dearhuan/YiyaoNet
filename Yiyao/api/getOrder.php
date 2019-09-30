<?php
$db = mysqli_connect("localhost", "root", "", "yiyao");

$flag = $_REQUEST['flag'] || 0;
if($flag == 'all'){
  $allSql = "UPDATE `cart` SET `isChecked`= 1";
  mysqli_query($db,$allSql);
}else if($flag == 'notall'){
  $notallSql = "UPDATE `cart` SET `isChecked`= 0";
  mysqli_query($db,$notallSql);
}

$sql = "SELECT * FROM `cart` WHERE `isChecked` = 1";

$result  =mysqli_query($db,$sql);

$data = mysqli_fetch_all($result, MYSQLI_ASSOC); //获取sql数据

$num = count($data) || 0;

if($num>0){
  $response = array("status"=>"success","data" => array("store"=>$data[0]["store"],"goods"=>$data));
  echo json_encode($response,true);
}else{
  $response = array("status"=>"none","data"=>$data);
  echo json_encode($response,true);
}



// print_r($response);
?>
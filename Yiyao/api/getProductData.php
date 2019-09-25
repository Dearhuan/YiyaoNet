<?php
# 001-先连接数据库
$db = mysqli_connect("localhost", "root", "", "yiyao");
$page = $_REQUEST["page"] * 20;  //0（0-20） 1（20-40） 2 3 4
$type = $_REQUEST["type"];
# 002-查询数据库得到所有的产品
if($type == 0){
  $sql = "SELECT * FROM `zhongyaolist` limit $page , 20";
}elseif($type == 1)
{
  $sql = "SELECT * FROM `zhongyaolist`  ORDER BY `zhongyaolist`.`comment` DESC limit $page , 20";
}elseif($type == 2)
{
  $sql = "SELECT * FROM `zhongyaolist`  ORDER BY `zhongyaolist`.`comment` DESC limit $page , 20";
}elseif($type == 3)
{
  $sql = "SELECT * FROM `zhongyaolist`  ORDER BY `zhongyaolist`.`comment` DESC limit $page , 20";
}elseif($type ==4)
{
  $sql = "SELECT * FROM `zhongyaolist`  ORDER BY `zhongyaolist`.`price` DESC limit $page , 20";
}elseif($type == 5)
{
  $sql = "SELECT * FROM `zhongyaolist`  ORDER BY `zhongyaolist`.`price` ASC limit $page , 20";
}

$result = mysqli_query($db,$sql);

# 003-把数据转换为JSON数据返回
// print_r($result);
// MYSQLI_ASSOC  MYSQLI_NUM
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
$response = array("status"=>"success","data" => $data);
echo json_encode($response,true);
?>
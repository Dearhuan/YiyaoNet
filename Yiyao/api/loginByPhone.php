<?php
// echo "OK!";
# 001 先获取参数
$phone = $_REQUEST['phone'];

# 002 连接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "yiyao");

# 003 查询数据库中是否存在该用户名，如果存在那么再检查密码是否正确
$sql = "SELECT * FROM userList WHERE phone='$phone'";
$result = mysqli_query($db,$sql);

$data = array("status" => "error", "data" => array("msg" => "登录失败"));

if(mysqli_num_rows($result) != "0")
{
  $dataT = mysqli_fetch_all($result, MYSQLI_ASSOC);
  if($phone == $dataT[0]["phone"])
  {
    # 登录成功
    $data["status"]="success";
    $data["data"]["msg"] = "登录成功,欢迎$phone";
    echo json_encode($data, true);
  }else
  {
    # 登录失败 密码不正确
    $data["status"] = "error";
    $data["data"]["msg"] = "登录失败，密码不正确";
    echo json_encode($data, true);
  }
  // print_r($data[0]["password"]);
  // print_r($data);
}else
{
  # 登录失败：该用户不存在！
  $data["status"] = "error";
  $data["data"]["msg"] = "登录失败，该用户不存在！";
  echo json_encode($data, true);
}

?>
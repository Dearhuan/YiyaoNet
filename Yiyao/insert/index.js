const config = {
    user: 'root',       // 数据库账号
    password: '',   // 数据库密码
    database: 'yiyao',   // 数据库名字
    data: './zhongyaolist.json', // json数据相当于当前文件的路径
    table: 'zhongyaolist',       // 需要插入数据的数据表名
    arr: ['id', 'gid', 'src', 'title','price','store','comment'] // 表单字段插入的顺序
}


const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
let connection = mysql.createConnection({
    host: 'localhost',
    prot: 3306,
    database: config.database,
    user: config.user,
    password: config.password
});
let data = fs.readFileSync(path.join(__dirname,config.data));
data = JSON.parse(data);
let { arr } = config;

function getStr(data) {
    let str = "";
    for (let i = 0, len = data.length; i < len; i++) {
        str += "("
        for (let j = 0, len = arr.length; j < len; j++) {
            str += "'" + data[i][arr[j]] + "',";
        }
        str = str.substring(0, str.length - 1);
        str += "),";
    }
    return str = str.substring(0, str.length - 1);
}
let sql = `insert into ${config.table} values ${getStr(data)}`;
connection.connect(function(err) {
    if (err) {
        console.log('连接数据库失败:' + err);
    }
    connection.query(sql, function(err, res) {
        if (err) {
            console.log("数据库语句执行失败" + err);
        }
        console.log(`插入数据成功！增加数据 ${res.affectedRows}条`);
    })
    connection.end();
});
const express = require('express')
const app = express()
const connection = require('./model/sql')
const bodyParser = require('body-parser')
const { request } = require('express')
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: true })
// app.use(bodyParser.urlencoded({ extended: true }))

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", "3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//登录查询
app.get('/search', (req, res) => {
    let sql = 'select * from stu';
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            // 做添加，result是一个对象，其中有一个属性affectedRows
            // 表示本次操作之后，影响的行数 
            // console.log(result); // result就是查询结果
            res.json(result)
        }
    });
})

app.get('/searchhome', (req, res) => {
    let sql = 'select * from home';
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            // 做添加，result是一个对象，其中有一个属性affectedRows
            // 表示本次操作之后，影响的行数 
            // console.log(result); // result就是查询结果
            res.json(result)
        }
    });
})

//注册
app.post('/add', jsonParser, (req, res, next) => {
    // insert into 表名(字段名1，字段名2,....)  values (值1，值2，....)
    // let sql = 'insert into stu (name , age) values("小丽" , 18)';
    let { user_name, password, root } = req.body
    console.log(req.body);
    let sql = `insert into stu (user_name,password,root) values('${user_name}','${password}',${root})`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            // 做添加，result是一个对象，其中有一个属性affectedRows
            // 表示本次操作之后，影响的行数 
            // console.log(result); // result就是查询结果
            res.json(result)
        }
    });
})


app.listen(3000, () => {
    console.log('3000端口就绪');
})

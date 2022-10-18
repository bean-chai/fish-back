const express = require('express')
const connection = require('./model/sql')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const router = express.Router()

//登录
router.get('/search', (req, res) => {
    let sql = 'select * from user';
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})


//注册
router.post('/add', jsonParser, (req, res, next) => {
    let { username, password, email, address, birth } = req.body
    let sql = `insert into user (username,password, email, address, birth) values('${username}','${password}','${email}','${address}','${birth}')`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})

//查询留言
router.get('/searchinput', (req, res) => {
    let sql = 'select * from input';
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})

//增加留言
router.post('/addinput', jsonParser, (req, res, next) => {
    let { inputContent } = req.body
    let sql = `insert into input (inputContent) values('${inputContent}')`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})

//修改用户信息
router.post('/change', jsonParser, (req, res) => {
    let { id, name, oldpass, email, address, birth } = req.body
    let sql = `update user set username='${name}',password='${oldpass}',email='${email}',address='${address}',birth='${birth}' where id=${id}`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})

//后台修改用户
router.post('/changeuser', jsonParser, (req, res) => {
    //通过id修改name和age属性值
    let { id, username, password, rootId, email, address, birth } = req.body
    let sql = `update user set username='${username}',password='${password}',rootId='${rootId}',email='${email}',address='${address}',birth='${birth}' where id=${id}`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})

//后台删除用户
router.post('/deluser', jsonParser, (req, res) => {
    let { id } = req.body
    let sql = `delete from user where id=${id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})

//后台删除留言
router.post('/delinput', jsonParser, (req, res) => {
    let { id } = req.body
    let sql = `delete from input where id=${id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})

module.exports = router
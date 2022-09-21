const express = require('express')
const connection = require('./model/sql')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const router = express.Router()

//登录查询
router.get('/search', (req, res) => {
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

router.get('/searchhome', (req, res) => {
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
router.post('/add', jsonParser, (req, res, next) => {
    // insert into 表名(字段名1，字段名2,....)  values (值1，值2，....)
    // let sql = 'insert into stu (name , age) values("小丽" , 18)';
    let {user_name, password, root} = req.body
    // console.log(req.body);
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

router.post('/addhome', jsonParser, (req, res, next) => {
    // insert into 表名(字段名1，字段名2,....)  values (值1，值2，....)
    // let sql = 'insert into stu (name , age) values("小丽" , 18)';
    console.log(req.body);

    let {name, image_url, birsday, phonenumber, node, parentId} = req.body
    // console.log(req.body);
    let sql = `insert into home ( name, image_url, birsday, phonenumber, node, parentId ) values('${name}','${image_url}','${birsday}',${phonenumber},${node},${parentId})`
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

router.post('/changehome', jsonParser, (req, res) => {
    //通过id修改name和age属性值
    let {id, childrenStatus} = req.body
    // console.log(req.body);

    // update 表名 set 字段1=值1, 字段2=值2,...  where 修改条件
    let sql = `update home set childrenStatus='${childrenStatus}' where id=${id}`
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

router.post('/delhome', jsonParser, (req, res) => {
    //通过id删除
    let {id} = req.body
    // delete  from 表名  where 删除条件
    let sql = `delete from home where id=${id}`;
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

router.post('/changeback', jsonParser, (req, res) => {
    //通过id修改name和age属性值
    let {userId, userName, passWord, Root} = req.body
    console.log(req.body);
    // update 表名 set 字段1=值1, 字段2=值2,...  where 修改条件
    let sql = `update stu set user_name='${userName}',password='${passWord}',root='${Root}' where user_id=${userId}`
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

router.post('/delback', jsonParser, (req, res) => {
    //通过id删除
    let {id} = req.body
    // delete  from 表名  where 删除条件
    let sql = `delete from stu where user_id=${id}`;
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

module.exports = router
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
router.get('/searchAll', (req, res) => {
    let sql = 'select * from user';
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})
//文章查询
router.post('/searchPaper', jsonParser, (req, res) => {
    const ids = req.body.id
    const page = req.body.page ? req.body.page : 0
    console.log(page);
    let sql = ''
    if (req.body = {} && !req.body.id) {
        sql = `select * from paper limit ${page},6`;
        // limit 0,6'

        let totalSql = 'select * from paper'
        connection.query(totalSql, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                //  num = ''
                let num = result.length
                let allData = result
                connection.query(sql, (err, result) => {
                    if (err) {
                        console.log('错误', err)
                    } else {
                        // res.json(result)
                        // res.json(result)
                        res.send({
                            allData: allData,
                            total: num,
                            data: result
                        })
                    }
                });
            }

        })
    } else {
        // let { id } = ids
        sql = `select * from paper where id = ${ids}`;
        connection.query(sql, (err, result) => {
            if (err) {
                console.log('错误', err)
            } else {
                // res.json(result)
                // res.json(result)
                res.send({
                    // allData: allData,
                    total: result.length,
                    data: result
                })
            }
        });
    }
})


//注册
router.post('/add', jsonParser, (req, res, next) => {
    let { name, region, imgUrl } = req.body
    let sql = `insert into user (name,region, imgUrl) values('${name}','${region}','${imgUrl}')`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})
//发布文章
router.post('/newPaper', jsonParser, (req, res, next) => {
    let { name, content, imgUrl, title, createTime, titleKey, titleImgUrl } = req.body
    let sql = `insert into paper (auther,title,content,imgUrl,createTime,titleKey,titleImgUrl) values('${name}','${title}','${content}','${imgUrl.split('"')[1]}','${createTime}','${titleKey}','${titleImgUrl}')`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})
//修改用户积分
router.post('/changeIntegral', jsonParser, (req, res) => {
    let { id, integral } = req.body
    let sql = `update user set integral='${integral + 5}' where id=${id}`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})
router.post('/searchIntegral', jsonParser, (req, res) => {
    let { id } = req.body
    let sql = `select integral from user where id=${id}`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('错误', err)
        } else {
            res.json(result)
        }
    });
})
// router.post('/searchAuthor', jsonParser, (req, res) => {
//     let { id } = req.body
//     let sql = `select score,name,@m1:=@m1+1 r from scores,(select @m1:=0)a where id=${id} order by score desc limit 3`
//     connection.query(sql, (err, result) => {
//         if (err) {
//             console.log('错误', err)
//         } else {
//             res.json(result)
//         }
//     });
// })

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
//查询留言
router.get('/searchAuther', (req, res) => {
    let sql = 'SELECT * FROM user ORDER BY integral DESC LIMIT 3';
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
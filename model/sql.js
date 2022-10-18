/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 09:44:55
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-10-18 08:48:11
 * @FilePath: \webclassBack\webclassBack\model\sql.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chaichai',
    database: 'yizhe'
})

connection.connect((err) => {
    if (err) return console.log(`数据库连接失败，错误：${err.stack}`)
    console.log('mysql数据库连接成功')
});

module.exports = connection
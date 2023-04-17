/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 09:44:55
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-04-12 22:49:11
 * @FilePath: \webClassBack\model\sql.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chaichai',
    database: 'webclass'
})

connection.connect((err) => {
    if (err) return console.log(`数据库连接失败，错误：${err.stack}`)
    console.log('mysql数据库连接成功')
});

module.exports = connection
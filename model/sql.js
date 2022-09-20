/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 09:44:55
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-15 11:32:49
 * @FilePath: \mysqltest\model\sql.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.docker === 'yes' ? 'db' : 'localhost',
    user: 'root',
    password: 'chaichai',
    database: 'localbase'
})

connection.connect((err) => {
    // 如果有错误对象，表示连接失败
    if (err) return console.log(`数据库连接失败，错误：${err.stack}`)
    // 没有错误对象提示连接成功
    console.log('mysql数据库连接成功')
});

module.exports = connection
/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 09:44:55
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-06-11 15:12:29
 * @FilePath: \webFinalBack\model\sql.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '45.155.220.111',
    port: 13306,
    user: 'root',
    password: 'chai1119',
    database: 'blogback'
});

connection.connect((err) => {
    if (err) return console.log(`数据库连接失败，错误：${err.stack}`);
    console.log('mysql数据库连接成功');
});

module.exports = connection;
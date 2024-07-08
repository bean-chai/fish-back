/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 09:44:55
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-07-05 16:08:49
 * @FilePath: \webFinalBack\model\sql.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: '222.187.222.22',
    port: 3306,
    user: '3636',
    password: '147258',
    database: '3636',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// connection.connect((err) => {
//     if (err) return console.log(`数据库连接失败，错误：${err.stack}`);
//     console.log('mysql数据库连接成功');
// });

connection.getConnection((err, connection) => {
    if (err) {
        console.log(`数据库连接失败，错误：${err}`);
    } else {
        console.log('MySQL数据库连接成功');
        connection.release();
    }
});

connection.on('error', (err) => {
    console.log(`数据库连接错误：${err}`);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('数据库连接丢失，尝试重新连接...');
        connection.getConnection((err, connection) => {
            if (err) {
                console.log(`重新连接失败，错误：${err}`);
            } else {
                console.log('重新连接成功');
                connection.release();
            }
        });
    } else {
        throw err;
    }
});


module.exports = connection;
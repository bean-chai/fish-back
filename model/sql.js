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

const createTable = (name, field) => {
    const sql = `CREATE TABLE IF NOT EXISTS ${name} (${field})`
    connection.query(sql, err => {
        if (err) throw err
        console.log(`数据表${name}创建成功`)
    });
}

connection.connect((err) => {
    // 如果有错误对象，表示连接失败
    if (err) return console.log(`数据库连接失败，错误：${err.stack}`)
    // 没有错误对象提示连接成功
    console.log('mysql数据库连接成功')

    createTable(
        'home',
        'id INT(8) AUTO_INCREMENT, name VARCHAR(255), image_url VARCHAR(255), birsday DATE, phonenumber VARCHAR(255), node INT(8), parentId INT(8), childrenStatus TINYINT(4), PRIMARY KEY (id)'
    )
    createTable(
        'stu',
        'user_id INT(11) AUTO_INCREMENT, user_name VARCHAR(32), password VARCHAR(32), root CHAR(1), PRIMARY KEY (user_id)'
    )
});

module.exports = connection
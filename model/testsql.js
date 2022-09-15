/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 11:29:50
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-15 11:31:50
 * @FilePath: \mysqltest\model\testsql.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
const connection = require('./sql')

let sql = 'select * from stu';
connection.query(sql, (err, result) => {
    if (err) {
        console.log('错误', err)
    } else {
        // 做添加，result是一个对象，其中有一个属性affectedRows
        // 表示本次操作之后，影响的行数 
        console.log(result); // result就是查询结果
    }
});

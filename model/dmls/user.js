/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 10:11:50
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-15 10:14:07
 * @FilePath: \mysqltest\model\dmls\user.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
module.exports = {
    quertUserByUserName: function (username) {
        return `select * from customs where user_name = '${userName}'`
    },
    register: function (userName, password) {
        return `insert into customs (username,password) values ('${userName}','${password}')`
    }
}
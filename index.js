/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 09:33:56
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-20 14:29:08
 * @FilePath: \mysqltest\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
const express = require('express')
const app = express()
const mainRouter = require('./router')
// app.use(bodyParser.urlencoded({ extended: true }))

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", "3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/chai', mainRouter)

app.listen(3000, () => {
    console.log('3000端口就绪');
})

/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 09:33:56
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2023-04-21 16:29:37
 * @FilePath: \毕设后台\webFinalBack\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
const express = require('express')
const app = express()
const mainRouter = require('./router')
var bodyParser = require('body-parser')
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
app.use(bodyParser.json({
    limit: '10000kb'
})); //最大上传大小不超过10000kb
app.use(bodyParser.urlencoded({
    limit: '10000kb',
    extended: true,
    parameterLimit: 50000,
}))

app.listen(3000, () => {
    console.log('柴柴后台启动！');
})

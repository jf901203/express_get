var express =require('express')
var http=require('http')
var app=express()
// all方法表示 所有请求都必须通过该中间件 参数中*表示对所有路由有效
app.all('*',function (req,res,next) { 
    res.writeHead(200,{'Content-Type':'text/plain'})
    next()
 })
// get方法则是只有get动词的http请求通过给中间件 它的第一个参数是请求的路径
// 由于get方法中的回调函数没有调用next方式 所以只要有一个中间件被调用了 后面的中间件就不会被调用了
 app.get('/about',function (req,res) {
    res.end('welcome about')
   })
app.get('/mise',function (req,res) {
    res.end('welcome mise')
  })
app.get('*',function (req,res) {
    res.end('404')
  })  
  
// 除了get方法以外，express提供了post put delete方法 即http动词都是express的方法 这些方法的第一个参数都是请求路劲
http.createServer(app).listen(5000)
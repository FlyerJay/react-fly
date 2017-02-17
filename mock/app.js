var express = require('express');
var app = express();

//允许跨域访问，方便开发
app.all('*',function(req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    next();
})

app.get('/',function(req,res){
    res.send({
        code: 200,
        data: '这是测试',
    })
})

var server = app.listen(3000,'127.0.0.1',function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('api mock 服务器启动：http://'+ host + ':' + port)
})
const express = require('express');
const app=express()

app.listen(8001,()=>console.log('服务启动成功'))
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8002");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var data1=[
    {value:335, name:'工商'},
    {value:310, name:'民委'},
    {value:234, name:'计生'},
    {value:135, name:'社保'},
    {value:154, name:'民政'},
    {value:154, name:'卫生'},
    {value:154, name:'公安'}
]
app.get('/sjj',(req,res)=>{
    console.log("require for sjj")
    res.json(data1)
})

var data2=[
    {value:335, name:'人口'},
    {value:310, name:'法人'},
    {value:234, name:'空间地理'},
    {value:135, name:'宏观经济'},
    {value:154, name:'证照'}
]
app.get('/qbsjl',(req,res)=>{
    res.json(data2)
})

var data3={
    allnum: 123456789875454,
    tbzjVal :'18%',
    hbzzVal : '3%'
}
app.get('/sjzl',(req,res)=>{
    res.json(data3)
})

var data4=[82, 92, 90, 93, 129, 133, 132,133,125,164,168,170]
app.get('/rksjl',(req,res)=>{
    res.json(data4)
})

var data5=[
    {
        value: 5000000,
        name: '人口'
    }, {
        value: 1000000,
        name: '外来人口'
    }, {
        value: 1000000,
        name: '低保人口'
    }, {
        value: 3000000,
        name: '在职人口'
    }
]


app.get('/rk', (req, res) => {
    res.json(data5)
})
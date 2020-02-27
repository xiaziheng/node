const http=require("http");
const fs = require('fs');
const url = require('url');
const lib = require('./lib');
const queryString = require('querystring');
const express = require('express')
const app = express();
console.log('----------',express)

app.get("/favicon.ico",function(res,req){
    req.writeHead(200);
    req.end('2222');
});
app.get( '/',function(res,req){
    fs.createReadStream(__dirname+"/index.html").pipe(req);
});
app.get( '/game',function(res,req){
    let currentUrl  =url.parse(res.url)
    let query = queryString.parse(currentUrl.query);
        let queryAction =query.action; 
        req.writeHead(200);
        console.log(queryAction)
        const result = lib(queryAction);
        console.log(result);
        if(result == 1){
            req.end('你赢了');
        }else if( result==0){
            req.end('打平了');
        }else{
            req.end('你输了');
        }
        
});
// app.use(function(res,req){})
app.listen(3012)

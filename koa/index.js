const http=require("http");
const fs = require('fs');
const url = require('url');
const lib = require('./lib');
const queryString = require('querystring');
const koa = require('koa');
const mount = require('koa-mount');
const app = new koa();

let count  = 0;
app.use(
    mount("/favicon.ico",function(ctx,next){
        ctx.status = 200;
        ctx.body = '2222';
    })
)
const game  = new koa();
game.use((ctx,next)=>{
    console.log(11111111)
    // let currentUrl  =url.parse(ctx.url)
    let query = ctx.query;
        let queryAction =query.action; 
       
        console.log(queryAction)
        const result = lib(queryAction);
        console.log(result);
        next();
       if(ctx.aaa)
       {
        ctx.status = 500;
        ctx.body = '你太厉害了，不和你玩了';
        return   
       }
        if(result == 1){
            ctx.status = 200;
            ctx.body = '你赢了';
            count ++;
        }else if(result==0){
            ctx.status = 200;
            ctx.body = '打平了';
        }else{
            ctx.status = 200;
            ctx.body = '你输了';
        }
})
game.use((ctx,next)=>{
    console.log(333333,count)
    if(count >=3){
       
        ctx.aaa = true;
        return
    }
})
app.use(
    mount('/game',game)
)
app.use(
    mount("/",function(ctx,next){
        console.log(2222222)
        ctx.body = fs.readFileSync(__dirname+"/index.html",'utf-8');
    })
)

// app.use(function(res,req){})
app.listen(3000)

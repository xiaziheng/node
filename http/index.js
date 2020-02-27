const http=require("http");
const fs = require('fs');
const url = require('url');
const lib = require('./lib');
const queryString = require('querystring');

http.createServer(function(request,response){
    let currentUrl  =url.parse(request.url)
    // console.log(currentUrl)
    if(currentUrl.pathname == "/favicon.ico"){
        response.writeHead(200);
        response.end('2222');
        return
    }
    if(currentUrl.pathname == '/game'){
        let query = queryString.parse(currentUrl.query);
        let queryAction =query.action; 
        response.writeHead(200);
        console.log(queryAction)
        const result = lib(queryAction);
        console.log(result);
        if(result == 1){
            response.end('你赢了');
        }else if( result==0){
            response.end('打平了');
        }else{
            response.end('你输了');
        }
        
        return
    }
    if(currentUrl.pathname == '/'){
        // response.writeHead(200);
        fs.createReadStream(__dirname+"/index.html").pipe(response);
    }
   
}).listen(3005);

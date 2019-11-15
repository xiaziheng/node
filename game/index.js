let current = process.argv[process.argv.length - 1];
console.log(current);
let lib = require('./lib.js');

let count = 0;
process.stdin.on('data',e=>{
    const current = e.toString().trim();
    console.log(current);
    const result = lib(current);
    console.log(result);
    if(result == '赢了'){
        count ++;
    }
    if(count >=3){
        console.log('你太厉害了，我不玩了！');
        process.exit();
    }
})
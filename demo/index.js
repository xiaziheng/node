
let current = process.argv[process.argv.length-1];
console.log(current);
let computer = Math.floor(Math.random()*3);
console.log(computer);
let arr =['shitou','jiandao','bu']
if(current ==arr[computer]){
    console.log('平局')
}else if((current == 'shitou' && arr[computer] == 'jiandao')|| (current == 'jiandao' && arr[computer] == 'bu')||(current == 'bu' && arr[computer] == 'shitou')){
    console.log('赢了')
}else{
    console.log('输了')
}
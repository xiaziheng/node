const vm = require('vm');

const user ={
    name :'`<h1><script/>`',
    key :'`<h2><script/><h2/>`'
}
const context ={
    user,
    include(name){
        return user[name]()
    },
    _: function(str){
        if(!str)return;
        return String(str).replace(/&/g,'&amp')
        .replace(/</g,'&lt').replace(/>/g,'&gt')
        .replace(/"/g,'&quot');

    }
}
Object.keys(user).forEach(element => {
    const temp = user[element];
    user[element] = vm.runInNewContext(`(function(){
        return ${temp}
    })()`,context)
});

console.log(user.name)
// console.log(vm.runInNewContext('`<h1>${_(user.name)}</h1>`',{
      
//     }
   
// ));

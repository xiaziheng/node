module.exports = (current) => {
    let computer = Math.floor(Math.random() * 3);
    console.log(computer);
    let arr = ['shitou', 'jiandao', 'bu']
    if (current == arr[computer]) {
       return '平局';
    } else if ((current == 'shitou' && arr[computer] == 'jiandao') || (current == 'jiandao' && arr[computer] == 'bu') || (current == 'bu' && arr[computer] == 'shitou')) {
        return '赢了';
    } else {
        return '输了';
    }
}
module.exports = (current) => {
    let computer = Math.floor(Math.random() * 3);
    console.log(computer);
    let arr = ['shitou', 'jiandao', 'bu']
    if (current == arr[computer]) {
       return 0;
    } else if ((current == 'shitou' && arr[computer] == 'jiandao') || (current == 'jiandao' && arr[computer] == 'bu') || (current == 'bu' && arr[computer] == 'shitou')) {
        return 1;
    } else {
        return -1;
    }
}
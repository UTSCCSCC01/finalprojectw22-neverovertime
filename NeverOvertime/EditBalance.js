function checkBal(name){
    var bal = require('./balances/' + name + '.json');
    return bal.balance;
}

module.exports = {checkBal}

console.log(checkBal("aaa"));
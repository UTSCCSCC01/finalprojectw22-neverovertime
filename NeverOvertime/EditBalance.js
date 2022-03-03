const fs = require('fs');

/* Adds amount to the profile balance of user name. */
function addBal(name,amount){
    var currBal = checkBal(name);
    var newBal = {
        "balance": currBal+amount
    };
    var jsonString = JSON.stringify(newBal);

    fs.writeFile('./balances/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    return 0; //Success
}

/* Removes amount to the profile balance of user name. */
function subBal(name,amount){
    var currBal = checkBal(name);
    if (currBal < amount){
        return 1; //Not enough money in balance
    }
    var newBal = {
        "balance": currBal-amount
    };
    var jsonString = JSON.stringify(newBal);

    fs.writeFile('./balances/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    return 0; //Success
}

/* Returns the amount in the profile balance of user name. */
function checkBal(name){
    var bal = require('./balances/' + name + '.json');
    return bal.balance;
}

module.exports = {addBal, subBal, checkBal}

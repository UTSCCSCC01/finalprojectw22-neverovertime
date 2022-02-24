const fs = require('fs');
function createP(name,password){
    if (!fs.existsSync('./profiles')){
        fs.mkdirSync('./profiles');
    }
    if (fs.existsSync('./profiles/' + name + '.json')){
        createBal(name);
        return 1; //Profile already exists
    }
    const newProfile = {
        "password": password
    };
    const jsonString = JSON.stringify(newProfile);

    fs.writeFile('./profiles/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    createBal(name);
    return 0; //Success
}

function createBal(name){
    if (!fs.existsSync('./balances')){
        fs.mkdirSync('./balances');
    }
    if (fs.existsSync('./balances/' + name + '.json')){
        return 1; //Profile already exists
    }
    const newBalance = {
        "balance": 50
    };
    const jsonString = JSON.stringify(newBalance);

    fs.writeFile('./balances/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    return 0; //Success
}

module.exports = {createP, createBal}

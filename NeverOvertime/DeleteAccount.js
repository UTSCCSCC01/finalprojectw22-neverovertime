const fs = require('fs');
function deleteAccount(name){
    if (!fs.existsSync('./profiles')){
        fs.mkdirSync('./profiles');
    }
    if (fs.existsSync('./profiles/' + name + '.json')){
        fs.rmdirSync('./profiles' + name + '.json');
        return 0; //Success
    }

    return 1; // Fail because name.json is not found
}
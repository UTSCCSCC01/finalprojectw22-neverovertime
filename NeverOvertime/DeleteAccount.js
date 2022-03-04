const fs = require('fs');

/* Deletes the user profile of user name. */
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
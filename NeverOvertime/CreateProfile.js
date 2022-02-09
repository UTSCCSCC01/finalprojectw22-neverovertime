const fs = require('fs');
function createP(name,password){
    if (!fs.existsSync('./profiles')){
        fs.mkdirSync('./profiles');
    }
    if (fs.existsSync('./profiles/' + name + '.json')){
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
    return 0; //Success
}
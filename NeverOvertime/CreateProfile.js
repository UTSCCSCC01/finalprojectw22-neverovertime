const fs = require('fs');
function createP(name,password){
    const newProfile = {
        "password": password,
        "achievements": [
            {
            "achievement": "Win 5 games in a row",
            "progress" : 0,
            "show" : false
        },
            {
            "achievement": "Earn $100 from winning",
            "progress" : 0,
            "show" : false
        },
            {
            "achievement": "Have over $1000",
            "progress" : 0,
            "show" : false
        }
        ]
    };
    const jsonString = JSON.stringify(newProfile);

    if (!fs.existsSync('./profiles')){
        fs.mkdirSync('./profiles');
    }

    fs.writeFile('./profiles/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
}
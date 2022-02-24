const fs = require('fs');
function checkPass(name,password){
    if (!fs.existsSync('./profiles/' + name + '.json')){
        return 1 //No username found
    }
    const jsonString = fs.readFileSync('./profiles/' + name + '.json');
    const profile = JSON.parse(jsonString);
    console.log(profile);
    if (profile.password == password){
        return 0; //Successful
    }
    else{
        return 2; //Password Incorrect
    }
}

module.exports = {checkPass}
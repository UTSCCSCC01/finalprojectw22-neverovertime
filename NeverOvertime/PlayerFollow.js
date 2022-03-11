const fs = require('fs');

//Adds following followName to name's data
function addFollowing(name,followName){
    if (!fs.existsSync('./followData')){
        return 4; //Folder not created, profiles can't exist
    }
    if (!fs.existsSync('./followData/' + name + '.json')){
        return 3; //Profile 'name' doesn't exists
    }
    if (!fs.existsSync('./followData/' + followName + '.json')){
        return 2; //Profile 'followName' doesn't exists
    }
    var currFollow = checkFollowing(name);
    var currFollower = checkFollowers(name);
    if (currFollow.includes(followName)){
        return 1; //Already following followName
    }
    currFollow.push(followName)
    var newFoll = {
        "following": currFollow,
        "followers": currFollower
    };
    var jsonString = JSON.stringify(newFoll);

    fs.writeFile('./followData/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    addFollower(followName,name);
    return 0; //Success
}

//Adds follower followerName to name's data, called from addFollowing
function addFollower(name,followerName){
    var currFollow = checkFollowing(name);
    var currFollower = checkFollowers(name);
    if (currFollower.includes(followerName)){
        return 1; //followerName already a follower
    }
    currFollower.push(followerName)
    var newFoll = {
        "following": currFollow,
        "followers": currFollower
    };
    var jsonString = JSON.stringify(newFoll);

    fs.writeFile('./followData/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    return 0; //Success
}

//Removes following followName from name's data
function removeFollowing(name,followName){
    if (!fs.existsSync('./followData')){
        return 4; //Folder not created, profiles can't exist
    }
    if (!fs.existsSync('./followData/' + name + '.json')){
        return 3; //Profile 'name' doesn't exists
    }
    if (!fs.existsSync('./followData/' + followName + '.json')){
        return 2; //Profile 'followName' doesn't exists
    }
    var currFollow = checkFollowing(name);
    var currFollower = checkFollowers(name);
    if (!currFollow.includes(followName)){
        return 1; //Not following followName
    }
    const index = currFollow.indexOf(followName);
    currFollow.splice(index, 1);
    var newFoll = {
        "following": currFollow,
        "followers": currFollower
    };
    var jsonString = JSON.stringify(newFoll);

    fs.writeFile('./followData/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    removeFollower(followName,name);
    return 0; //Success
}

//Returns an array containing the users name is following
function checkFollowing(name){
    try{
        var foll = require('./followData/' + name + '.json');
        return foll.following;
    }
    catch(e){}
}

//Returns an array containing the users following name
function checkFollowers(name){
    try{
        var foll = require('./followData/' + name + '.json');
        return foll.followers;
    }
    catch(e){}
}

module.exports = {addFollowing, addFollower, removeFollowing, checkFollowing, checkFollowers}

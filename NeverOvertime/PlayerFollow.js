const fs = require('fs');

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

module.exports = {checkFollowing, checkFollowers}

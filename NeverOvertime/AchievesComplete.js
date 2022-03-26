//Returns whether or not an achievement achName with value achVal has been completed
function achComplete(achName, achVal){
    var valMax = achMaxVal(achName);
    return (valMax <= achVal);
}

//Returns the value needed for an achievement achName to be considered "completed"
function achMaxVal(achName){
    switch(achName) {
        case "Win 1 round of blackjack":
            return 1;
        case "Win 5 rounds of blackjack":
            return 5;
        case "Win 10 rounds of blackjack":
            return 10;
        case "Win 100 rounds of blackjack":
            return 100;
        case "Win 3 Times in a Row":
            return 3;
        case "Win 5 Times in a Row":
            return 5;
        case "Win 10 Times in a Row":
            return 10;
        case "Win at least $50 Total":
            return 50;
        case "Win at least $100 Total":
            return 100;
        case "Win at least $1000 Total":
            return 1000;
        case "Get blackjack once":
            return 1;
        case "Get blackjack 3 times":
            return 3;
        case "Get blackjack 5 times":
            return 5;
        case "Get blackjack 10 times":
            return 10;
    }
    console.log("Invalid Achievement Name");
    return -1;
}
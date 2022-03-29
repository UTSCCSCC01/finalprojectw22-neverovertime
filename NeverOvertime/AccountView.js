import React,{useEffect, useState}  from 'react';
import type {Node} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Section,
  Text,
  TextInput,
  useColorScheme,
  Button,
  Title,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { checkFollowers, checkFollowing } from './PlayerFollow';
import AsyncStorage from '@react-native-async-storage/async-storage';

var flist = checkFollowers("User")
var text = ""
for (let i = 0; i < flist.length-1; i++) {
  text += flist[i] + ", ";
}
text += flist[flist.length-1];


//function that traverse through the followers list and list each follower
/*
function displayFollower(){
  for (let i = 0; i < flist.length-1; i++) {
    text += flist[i] + ", ";
  }
  text += flist[flist.length-1];
  return text
}
*/


var followinglist = checkFollowing("User")
var followingtext = ""

for(let a=0; a<followinglist.length-1; a++){
  followingtext +=followinglist[a] + ", ";
}
followingtext += followinglist[followinglist.length-1];

const loginUser = (word1) => {
  index = -1;
  for (let i = 0; i < followinglist.length; i++) {
    if (word1 == followinglist[i]) {
      index = i;
    }
  }
  if (index != -1) {
    followinglist.splice(index, 1)
  }
  followingtext = ""
  for (let i = 0; i < followinglist.length-1; i++) {
    followingtext += followinglist[i] + ", ";
  }
  followingtext += followinglist[followinglist.length-1];
};

// function that traverse through the followers list
/*
function displayFollowing(){
  for(let a=0; a<followinglist.length-1; a++){
    followingtext +=followinglist[a] + ", ";
  }
  followingtext += followinglist[followinglist.length-1];
  return followingtext
}
*/

/* View to see account details.
Users should be able to view details of their account
*/
function AccountView ({ navigation }) {

  const [text1, ChangeText1] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState("");
    useEffect(() => {
        async function getUserData(){
                        var username = await AsyncStorage.getItem("user_username");
                        var email = await AsyncStorage.getItem("user_email");
                        var balance = await AsyncStorage.getItem("user_balance");
                        setUsername(username);
                        setEmail(email);
                        setBalance(balance);

                    }
        getUserData();

    });
   return (
    <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed');
            }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>View Profile</Text>
          <Text>Username : {username}</Text>
          <Text>Account Status : Active</Text>
          <Text>Balance: {balance}</Text>
          <Text>Followers: {text}</Text>
          <Text>Following: {followingtext}</Text>
          <TextInput
              onChangeText={ChangeText1}
              value={text1}
              placeholder="Username"
          />
          <Button title="Stop Following" onPress={() => loginUser(text1)} />
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Delete Account" onPress={() => navigation.popToTop('LogIn')}/>
          <Button title="Search" onPress={() => navigation.navigate('Search')} />
    </View>
    </TouchableWithoutFeedback>
   );
}

export default AccountView
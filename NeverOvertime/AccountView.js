import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Section,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Title,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { checkFollowers, checkFollowing } from './PlayerFollow'

var flist = checkFollowers("User")
var text = ""

//function that traverse through the followers list and list each follower
function displayFollower(){
  for (let i = 0; i < flist.length-1; i++) {
    text += flist[i] + ", ";
  }
  text += flist[flist.length-1];
  return text
}

var followinglist = checkFollowing("User")
var followingtext = ""
/* function that traverse through the followers list  */
function displayFollowing(){
  for(let a=0; a<followinglist.length-1; i++){
    followingtext +=followinglist[a] + ", ";
  }
  text += followinglist[followinglist.length-1];
  return followingtext
}

/* View to see account details. */
function AccountView ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>View Profile</Text>
          <Text>Username : cory</Text>
          <Text>Account Status : Active</Text>
          <Text>Balance: 1000</Text>
          <Text>Followers: {displayFollower()}</Text>
          <Text>Following: {displayFollowing()}</Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Delete Account" onPress={() => navigation.popToTop('LogIn')}/>
          <Button title="Search" onPress={() => navigation.navigate('Search')} />
    </View>
  );
}

export default AccountView
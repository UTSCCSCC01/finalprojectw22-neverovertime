import React, {useEffect, useState} from 'react';
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
import {apiAddress} from './ApiConfig'
/* View to see account details. */
function Profile ({ navigation, route }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [balance, setBalance] = useState("");
  useEffect(() => {
    fetch('http://'+apiAddress+':3000/api/user?id=' + route.params.userid, { //change your ip addressn here
                   method: 'GET', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
                   headers: {
                       'Content-Type' : 'application/json'
                   }
                 })
                 .then(response => response.json())
                 .then((serverResponse) => {
                   console.warn(serverResponse)
                     if(serverResponse == {}){
                        Alert.alert('', "User does not exist");
                        navigation.navigate('Home');
                     }else{
                        setUsername(serverResponse["Username"]);
                        setEmail(serverResponse["Email"]);
                        setBalance(serverResponse["Balance"])
                     }
                 })
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>View Profile</Text>
          <Text>UserID : {route.params.userid}</Text>
          <Text>Username : {username}</Text>
          <Text>Email : {email}</Text>
          <Text>Balance: {balance}</Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

    </View>
  );
}

export default Profile
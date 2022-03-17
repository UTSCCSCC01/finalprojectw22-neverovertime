import React from 'react';
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
import {apiAddress} from './ApiConfig'
//import checkPass from "./CheckPassword";

/* Defines the Log In page view. */
function Search ({ navigation }) {

  const [text1, ChangeText1] = React.useState(null);
  const [text2, ChangeText2] = React.useState(null);
  const loginUser = (word1, word2) => {
      fetch('http://' + apiAddress + ':3000/api/user/search', { //change your ip addressn here
            method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              "username": word1
            })
          })
          .then(response => response.json())
          .then((serverResponse) => {
//            console.warn(serverResponse)
              if(serverResponse != -1){
                navigation.navigate('Profile',{userid: serverResponse})
              }else{
                Alert.alert('', "User does not exist");
              }
          })
  };

  return (
  <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
          console.log('dismissed');
          }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Search</Text>
            <TextInput
              style={box.input}
              onChangeText={ChangeText1}
              value={text1}
              placeholder="Username"
            />


            <Button title="Search" onPress={() => loginUser(text1, text2)} />

      </View>
      </TouchableWithoutFeedback>
    );
}

const box = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    width: 150,
    padding: 7,
  },
});


export default Search;
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
/* Defines the Sign Up page view. */
function SignUp ({ navigation }) {
            const [text1, ChangeText1] = React.useState(null);
            const [text2, ChangeText2] = React.useState(null);
            const [text3, ChangeText3] = React.useState(null);
   const signupUser = (word1, word2, word3) => {

         fetch('http://'+apiAddress+':3000/api/user/signup', { //change your ip addressn here
               method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
               headers: {
                   'Content-Type' : 'application/json'
               },
               body: JSON.stringify({
                 "username": word1,
                 "password": word2,
                 "email": word3
               })
             })
             .then(response => response.json())
             .then((serverResponse) => {
//               console.warn(serverResponse)
                 if(serverResponse == true){
                    navigation.popToTop()
                 }else{
                   Alert.alert('', "User exist");
                 }
             })
     };
  return (
        <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
        }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SignUp</Text>
                        <TextInput
                         style={box.input}
                         onChangeText={ChangeText1}
                         value={text1}
                         placeholder="username"
                                                />
                        <TextInput
                          style={box.input}
                          onChangeText={ChangeText3}
                          value={text3}
                          placeholder="email address"
                        />
                        <TextInput
                          style={box.input}
                          onChangeText={ChangeText2}
                          value={text2}
                          placeholder="Password"
                        />
            <Button title="Submit" onPress={() => signupUser(text1, text2, text3)} />
            <Button title="Back" onPress={() => navigation.popToTop()} />
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
export default SignUp;
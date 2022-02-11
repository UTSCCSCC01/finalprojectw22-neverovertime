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


function SignUp ({ navigation }) {
            const [text1, ChangeText1] = React.useState(null);
            const [text2, ChangeText2] = React.useState(null);
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
                          placeholder="email address"
                        />
                        <TextInput
                          style={box.input}
                          onChangeText={ChangeText2}
                          value={text2}
                          placeholder="Password"
                        />
            <Button title="Submit" onPress={() => navigation.navigate('SignUp')} />
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
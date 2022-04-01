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
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { checkBal } from './EditBalance.js';


/* Defines the Home page view.
Home page is the main page a user should see, contains buttons to important pages.
*/
function Home ({ navigation, route }) {
  return (

    <View  style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button title="GamePage" onPress={() => navigation.navigate('GamePage')} />
          <Button title="View Profile" onPress={() => navigation.push('AccountView')} />
          <Button title="Achievement" onPress={() => navigation.navigate('Achievement')} />
          <Button title="GameStats" onPress={() => navigation.navigate('GameStats')} />
          <Button title="Add to Balance" onPress={() => navigation.navigate('AddMoney')} />
          <Button title="Shop" onPress={() => navigation.navigate('Shop')} />
          <Button title="Logout" onPress={() => navigation.popToTop()} />

          <Text>Balance: 0</Text>

    </View>
  );
}

export default Home;
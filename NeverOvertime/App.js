/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home.js";
import LogIn from "./LogIn.js";
import AccountView from "./AccountView.js";
import Achievement from "./components/Achievement.js";
import SignUp from "./signup.js";
import GamePage from "./GamePage.js";
import Bet from './Bet.js';
import Search from './Search.js';
import Profile from './Profile.js';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

/* Defines the app and structure. */
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LogIn} options={{ title: 'NeverOvertime' }}/>
            <Stack.Screen name="Home" component={Home} options={{ title: 'NeverOvertime' }}/>
            <Stack.Screen name="AccountView" component={AccountView} options={{ title: 'Profile' }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'NeverOvertime' }}/>
            <Stack.Screen name="Achievement" component={Achievement} options={{title: 'Achievement'}} />
            <Stack.Screen name="GamePage" component={GamePage} options={ {title: 'GamePage'}} />
            <Stack.Screen name="Search" component={Search} options={ {title: 'Search'}} />
            <Stack.Screen name="Bet" component={Bet} options={ {title: 'Bet'}} />
            <Stack.Screen name="Profile" component={Profile} options={ {title: 'Profile'}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


export default App;

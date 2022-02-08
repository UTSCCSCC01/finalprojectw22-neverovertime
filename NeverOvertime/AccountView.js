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

function AccountView ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>View Profile</Text>

          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Delete Account" onPress={() => navigation.navigate('LogIn')}/>
    </View>
  );
}

export default AccountView
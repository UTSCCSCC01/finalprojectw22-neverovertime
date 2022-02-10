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

function Home ({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="View Profile" onPress={() => navigation.push('AccountView')} />
      <Button title="Achievement" onPress={() => navigation.navigate('Achievement')} />
      <Button title="Logout" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default Home;
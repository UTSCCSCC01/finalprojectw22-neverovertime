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

function SignUp ({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SignUp</Text>

            <Button title="Submit" onPress={() => navigation.navigate('SignUp')} />
            <Button title="Back" onPress={() => navigation.popToTop()} />
      </View>
    );
}

export default SignUp;
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

//import drawCard from "./DrawCard.js";


function GamePage ({ navigation, route }) {
    function drawCard(){
        Alert.alert(
          "Drawing Cards is yet to be implemented", "Click OK",
          [
            {text: "OK"}
          ]
        )
    }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GamePage</Text>
      <Button title="Draw Cards" onPress={() => drawCard()
          } />

    </View>
  );
}

export default GamePage;
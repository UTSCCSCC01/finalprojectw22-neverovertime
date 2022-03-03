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

/* Draws a new card from the deck. */
function drawCard(){
    Alert.alert(
      "Drawing Cards is yet to be implemented", "Click OK",
      [
        {text: "OK"}
      ]
    )
}


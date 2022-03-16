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
import {Card, Deck} from "./CardDeck.js";


function drawCard({ navigation, route }){
    var bag = [];
    dealerCard = new newDeck();
    dealerCard.shuffle();
    dealerCard.dealCard()
    return this.dealerCard.pop();

}


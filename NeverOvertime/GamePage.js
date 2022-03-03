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
import {Chips} from "./Bet.js";

let deck = new Deck();
// const chip=()=>{
//   Chips()
// }

function GamePage ({ navigation, route }) {
    function drawCard(){
      // let deck = new Deck();

      //   let card = deck.dealCard
      //   let suit = card.suit
      //   let rank = card.rank

        return 1
    }
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GamePage</Text>
      <Button title="Draw Cards" onPress={() => drawCard()
          } />
      <Button title="Bet" onPress={() => navigation.navigate('Bet')} />
      </View>
  );
}

export default GamePage;
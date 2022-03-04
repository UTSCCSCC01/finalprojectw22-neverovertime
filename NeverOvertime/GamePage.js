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

/* Defines the view for playing Black Jack. */
function GamePage ({ navigation, route }) {

    deck.shuffle()
    var firstCard = deck.dealCard()
    var secondCard = deck.dealCard()

    /* Defines how to evaluate the value of a card in Black Jack. */
    function cardValue(card){
      
      if (card.rank == 'J' || card.rank == 'Q'|| card.rank == 'K'){
        var value = 10
      } else if (card.rank == "A") {
        var value = 11
      } else {
        var value = parseInt(card.rank);
      }
      return value
    }

    /* Evaluates the opponent cards. */
    function dealerStartCards(){
      
      var total = 0
      total += cardValue(firstCard)
      total += cardValue(secondCard)

      return total

    }

    var check = dealerStartCards()

    /* Defines the view of each card. */
    function displayNewCard(){

      if (check < 17){

        do {
          var newCard = deck.dealCard()
          check += cardValue(newCard)
          return <Text><Text> | </Text><Text>{newCard.rank}</Text><Text> of </Text><Text>{newCard.suit}</Text></Text>
        }
        while (check < 17);
      }
      return null

    }

    /* Draws a card from the deck. */
    function drawCard(){

        return 1
    }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

      <Text style={{ fontSize: 40 }}>Dealer</Text>
      <Text style={{ fontSize: 20 }}>Dealer's Hand</Text>
      <Text></Text>
      <Text>
        <Text>{firstCard.rank}</Text>
        <Text> of </Text>
        <Text>{firstCard.suit}</Text>
        <Text> | </Text>
        <Text>{secondCard.rank}</Text>
        <Text> of </Text>
        <Text>{secondCard.suit}</Text>
        {displayNewCard()}
        {displayNewCard()}
        {displayNewCard()}
        {displayNewCard()}
        {displayNewCard()}
      </Text>
      <Text></Text>
      <Text>
        <Text>Dealer's Total: </Text>
        <Text>{check}</Text>
      </Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Draw Cards" onPress={() => drawCard()} />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Bet" onPress={() => navigation.navigate('Bet')} />
      <Text>Balance: 1000</Text>

      </View>
  );
}

export default GamePage;
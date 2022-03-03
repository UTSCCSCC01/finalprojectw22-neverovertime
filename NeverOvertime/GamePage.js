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
//import {myCard} from "./DrawCard.js";

let deck = new Deck();
// const chip=()=>{
//   Chips()
// }

function GamePage ({ navigation, route }) {


    const firstCard = deck.dealCard()
    const secondCard = deck.dealCard()

    const myCard = [];
    myCard.push(firstCard);
    myCard.push(secondCard); //push to a list

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

    function dealerStartCards(){
      
      var total = 0
      total += cardValue(firstCard)
      total += cardValue(secondCard)
      //total += cardValue(card)

      return total

    }

    var check = dealerStartCards()

    function displayNewCard(){
      console.log(check);

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


    
    function drawCard(){

      let deck = new Deck();
      const card = deck.dealCard()
      let suit = card.suit
      let rank = card.rank
      myCard.push(deck);
      return card


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
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Draw Cards" onPress={() => drawCard()} />
      <Button title="Bet" onPress={() => navigation.navigate('Bet')} />
      <Text>Balance: 1000</Text>
      <Text style={{ fontSize: 20 }}>draw card</Text>
      <Text>{drawCard.rank}</Text>
      <Text> of </Text>
      <Text>{drawCard.suit}</Text>
      {displayNewCard()}

      </View>
  );
}

export default GamePage;
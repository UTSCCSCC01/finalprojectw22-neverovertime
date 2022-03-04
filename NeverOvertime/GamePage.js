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


    deck.shuffle()
        var firstCard = deck.dealCard()
        var secondCard = deck.dealCard()

        var playerFirstCard = deck.dealCard()
        var playerSecondCard = deck.dealCard()

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
      return <Text><Text> | </Text><Text>{card.rank}</Text><Text> of </Text><Text>{card.suit}</Text></Text>


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
      <Text style={{ fontSize: 20 }}>Player's Hand</Text>
            <Text>
              <Text>{playerFirstCard.rank}</Text>
              <Text> of </Text>
              <Text>{playerFirstCard.suit}</Text>
              <Text> | </Text>
              <Text>{playerSecondCard.rank}</Text>
              <Text> of </Text>
              <Text>{playerSecondCard.suit}</Text>
      </Text>

      </View>
  );
}

export default GamePage;
import React, { useState } from 'react';
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
//import {dealerCard} from "./DrawCard.js";

let deck = new Deck();

deck.shuffle()
        var firstCard = deck.dealCard()
        var secondCard = deck.dealCard()

        var playerFirstCard = deck.dealCard()
        var playerSecondCard = deck.dealCard()

    let dealerCard = [];
    dealerCard.push(firstCard);
    dealerCard.push(secondCard); //push to a list

    let playerCard = [];
    playerCard.push(playerFirstCard);
    playerCard.push(playerSecondCard); //push to a list


// const chip=()=>{
//   Chips()
// }

/* Defines the view for playing Black Jack.
Players can play Black Jack and make bets in a game.
*/
function GamePage ({ navigation, route }) {

    const initialValue = getTotal(playerCard)
    const initialInfo = getCardInfo(playerCard)
    const [cardInfo, updateCards] = useState(initialInfo);
    const [playerTotal, updateTotal] = useState(initialValue);


    const dInitialValue = getTotal(dealerCard)
    const dInitialInfo = getCardInfo(dealerCard)
    const [dealerInfo, updateDealerInfo] = useState(dInitialInfo);
    const [dealerTotal, updateDealerTotal] = useState(dInitialValue);


    function addCards(rankSuit, value){
      updateCards(rankSuit)
      updateTotal(value)
    }







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
    // function dealerStartCards(){
      
    //   var total = 0
    //   total += cardValue(firstCard)
    //   total += cardValue(secondCard)
    //   //total += cardValue(card)

    //   return total

    // }

    function newGame(){
      deck = new Deck();

      deck.shuffle()
        var newfirstCard = deck.dealCard()
        var newsecondCard = deck.dealCard()

        var newplayerFirstCard = deck.dealCard()
        var newplayerSecondCard = deck.dealCard()

      clearCards(dealerCard)
      dealerCard.push(newfirstCard);
      dealerCard.push(newsecondCard); //push to a list

      clearCards(playerCard)
      playerCard.push(newplayerFirstCard);
      playerCard.push(newplayerSecondCard);

      const v = getTotal(playerCard)
      const info = getCardInfo(playerCard)
      updateCards(info)
      updateTotal(v)

      return null
    }

    /* Defines the view of each card. */
    // function displayNewCard(){

    //   if (check < 17){

    //     do {
    //       var newCard = deck.dealCard()
    //       check += cardValue(newCard)
    //       return <Text><Text> | </Text><Text>{newCard.rank}</Text><Text> of </Text><Text>{newCard.suit}</Text></Text>
    //     }
    //     while (check < 17);
    //   }
    //   return null

    // }

    /* Draws a card from the deck. */
    function drawCard(){

      const card = deck.dealCard()
      const rank = card.rank
      const suit = card.suit
      const value = cardValue(card)

      playerCard.push(card);
      const info = getCardInfo(playerCard)
      const total = getTotal(playerCard)

      addCards(info, total)
      return card



    }

    function clearCards(cards){
      const length = cards.length
      for (let i = 0; i < length; i++) {
        cards.pop()
      }
    }

    function getTotal(cards){
      let total = 0
      for (let i = 0; i < cards.length; i++) {
        total += cardValue(cards[i])
      }

      return total
    }

    function getCardInfo(cards){
      let info = ""
      for (let i = 0; i < cards.length; i++) {
        info += cards[i].rank + "of" + cards[i].suit + " | "
      }

      return info
    }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

      <Text style={{ fontSize: 40 }}>Dealer</Text>
      <Text style={{ fontSize: 20 }}>Dealer's Hand</Text>
      <Text>{dealerInfo}</Text>
      <Text></Text>



      <Text></Text>
      <Text>
        <Text>Dealer's Total: </Text>
        <Text>{dealerTotal}</Text>
      </Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Draw Cards for Player" onPress={() => drawCard()} />
      <Button title="New Game" onPress={() => newGame()} />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Bet" onPress={() => navigation.navigate('Bet')} />
      <Text>Balance: 1000</Text>

      <Text style={{ fontSize: 20 }}>Player's Hand</Text>
      <Text>{cardInfo}</Text>
      <Text style={{ fontSize: 20 }}>Total</Text>
      <Text>{playerTotal}</Text>

      </View>
  );
}

export default GamePage;
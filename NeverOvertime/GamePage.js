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
  Image,
  TouchableOpacity,
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
const dealerCard = [];
dealerCard.push(firstCard);
dealerCard.push(secondCard); //push to a list

const playerCard = [];
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



    function getDir(state){
      return (""+state).toString();
    }

    function sleep(sleepDuration){
      var now = new Date().getTime();
      while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
    }
    


    function addCards(rankSuit, value){
      updateCards(rankSuit)
      updateTotal(value)
    }

    function addDealerCards(rankSuit, value){
      updateDealerInfo(rankSuit)
      updateDealerTotal(value)
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

      const dealerv = getTotal(dealerCard)
      const dealerInfo = getCardInfo(dealerCard)
      updateDealerInfo(dealerInfo)
      updateDealerTotal(dealerv)

      return null
    }


    /* Draws a card from the deck. */
    function stay(){
      if (getTotal(dealerCard) < 17){
        do{
          const card = deck.dealCard()
          const rank = card.rank
          const suit = card.suit
          const value = cardValue(card)

          dealerCard.push(card)
          const info = getCardInfo(dealerCard)
          const total = getTotal(dealerCard)

          addDealerCards(info, total)
        }
        while(getTotal(dealerCard) < 17);
      }

      if (getTotal(dealerCard)>21){
        Alert.alert("you won", "Dealer busted")
      } else if (getTotal(dealerCard)>getTotal(playerCard)){
        Alert.alert("you lost", "Dealer Hand is bigger than yours\n Your hand is: " +
        getTotal(playerCard) + "\n Dealer's hand is: " +
        getTotal(dealerCard))
      } else if (getTotal(dealerCard)<getTotal(playerCard)){
              Alert.alert("you won", "Dealer Hand is smaller than yours\n Your hand is: " +
              getTotal(playerCard) + "\n Dealer's hand is: " +
              getTotal(dealerCard))
      } else{
        Alert.alert("tie game", "Your hand is: " + getTotal(playerCard) + "\n Dealer's hand is: " +
        getTotal(dealerCard))
      }
      newGame();


      return null;
    }


    function drawCard(){

      const card = deck.dealCard()
      const rank = card.rank
      const suit = card.suit
      const value = cardValue(card)

      playerCard.push(card);
      const info = getCardInfo(playerCard)
      const total = getTotal(playerCard)

      addCards(info, total)

      if (total>21){
        Alert.alert("you lost", "You busted: " +
                getTotal(playerCard) + "\n Dealer's hand is: " +
                getTotal(dealerCard))
        newGame();
      }

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


    // function getTemplate(templateName) {
    //   return require(`./images/cards/Aclub.png`);
    // }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

      <Text style={{ fontSize: 40 }}>Dealer</Text>
      <Text style={{ fontSize: 20 }}>Dealer's Hand</Text>

      <View style={styles.ItemsContainer}>
       {
        dealerCard.map((c) =>(
                    <Image source={c.image} style = {styles.ImageClass} />
               ))
       }
      </View>

      <Text>
        <Text>Dealer's Total: </Text>
        <Text>{dealerTotal}</Text>
      </Text>

      <Text></Text>
      <Button title="Hit" onPress={() => drawCard()} />
      <Button title="Stay" onPress={() => stay()} />
      <Button title="New Game" onPress={() => newGame()} />
      <Text></Text>
      <Button title="Bet" onPress={() => navigation.navigate('Bet')} />


      <Text style={{ fontSize: 20 }}>Player's Hand</Text>
    <View style={styles.ItemsContainer}>
       {
        playerCard.map((c) =>(
                    <Image source={c.image} style = {styles.ImageClass} />
               ))
       }
      </View>

      <Text style={{ fontSize: 20 }}>Total: {playerTotal}</Text>
       <Text>Balance: 1000</Text>


      </View>


      
  );
}

const styles = StyleSheet.create(
  {
      ItemsContainer:{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
      },
      ButtonContainer: {
          flex: 2, 
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
      },
      ImageClass: {
          width: 50,
          height: 72
      },
  }
  )

export default GamePage;
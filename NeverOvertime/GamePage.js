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
  ImageBackground
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

    const [betAmount, setBetAmount] = useState(0);

    const addbet=(amount)=>{
        setBetAmount(betAmount + amount);
    }

    const clearbet = () => {
        setBetAmount(0);
    }

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
    <ImageBackground source={require('./images/background/bgn.jpg') } resizeMode="cover" style={{flex:1, 
      justifyContent: 'center'}}> 
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

      <Text style={{ fontSize: 20, color: 'white' }}>Dealer's Hand</Text>
      <Text></Text>
      <Text style={{fontSize: 20, color: 'orange'}}>
        <Text>Dealer's Total: </Text>
        <Text>{dealerTotal}</Text>
      </Text>
      <View style={styles.ItemsContainer}>
       {
        dealerCard.map((c) =>(
                    <Image source={c.image} style = {styles.ImageClass} />
               ))
       }
      </View>
      <Text></Text>
      <Text></Text>
      <Text></Text>


      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <Button title="Hit" onPress={() => drawCard()} />
      <Button title="Stay" onPress={() => stay()} />
      <Button title="New Game" onPress={() => newGame()} />
      {/* <Button title="Bet" onPress={() => navigation.navigate('Bet')} /> */}
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Text style={{ fontSize: 20, color: 'white' }}>Player's Hand</Text>
      <View style={styles.ItemsContainer}>
       {
        playerCard.map((c) =>(
                    <Image source={c.image} style = {styles.ImageClass} />
               ))
       }
      </View>

      <Text style={{ fontSize: 20, color: 'orange' }}>Total: {playerTotal}</Text>

      {/* <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 15, color: 'orange'}}>
            Bank Balance : {betAmount} 
        </Text>
        <Text style={{fontSize: 15, color: 'orange'}}>
            Total Bet : {betAmount}
        </Text>
      </View> */}

       {/* <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.Button}>
          <Button 
              onPress = {clearbet}
              title = "Clear"
          />
        </View>
        <View style={styles.Button}>
          <Button
              title = "Deal"
          />
        </View>

       </View> */}
      {/* <View style={styles.ImageContainer}>
        <TouchableOpacity onPress={() =>addbet(1)}>
            <Image source={require("./images/chip/1.png")} style = {styles.tokenClass}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>addbet(5)}>
            <Image source={require("./images/chip/5.png")} style = {styles.tokenClass}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>addbet(25)}>
            <Image source={require("./images/chip/25.png")} style = {styles.tokenClass}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>addbet(100)}>
            <Image source={require("./images/chip/100.png")} style = {styles.tokenClass}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>addbet(500)}>
            <Image source={require("./images/chip/500.png")} style = {styles.tokenClass}/>
        </TouchableOpacity>
      </View> */}
      </View>
    </ImageBackground>
      
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
          width: 90,
          height: 130, 
      },
      ImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      tokenClass: {
        width: 60,
        height: 60
      }, 
      Button : {
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }
  }
  )

export default GamePage;
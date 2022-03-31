import React, { useState, useEffect } from 'react';
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
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Card, Deck} from "./CardDeck.js";
import {Chips} from "./Bet.js";
import {addBal, subBal, checkBal} from "./EditBalance.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiAddress} from './ApiConfig'

/* Defines the view for to add money to account balance. */
function AddMoney ({ navigation, route }) {

      const [amount, setAmount] = useState(0);
      const [bankBal, setBankBal] = useState(0);
      const [userid, setUserid] = useState(0);
    async function getUserData(){
      var balance = await AsyncStorage.getItem("user_balance");
      setBankBal(balance);
      var userid = await AsyncStorage.getItem("user_id");
      setUserid(userid);
    }
    async function setUserBalance(newBalance){
           await AsyncStorage.setItem('user_balance', newBalance.toString());
    }
    useEffect(() => {
        getUserData();

     });
      const addAmount=(value)=>{
          setAmount(amount + value);
      }

      const clearAmount = () => {
          setAmount(0);
      }

      const addBalance = () => {
        //addBal(name, amount);
//        setBankBal(bankBal + amount);
         //Update Balance
                  fetch('http://' + apiAddress + ':3000/api/user/updatebalance', { //change your ip addressn here
                              method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
                              headers: {
                                  'Content-Type' : 'application/json'
                              },
                              body: JSON.stringify({
                                "userid": userid,
                                "newbalance": parseInt(bankBal) + amount
                              })
                            })
                            .then(response => response.json())
                            .then((serverResponse) => {
                                alert('added to balance');
                                setUserBalance(parseInt(bankBal) + amount);
                                 setBankBal(parseInt(bankBal) + amount);
                            })
        clearAmount();
      }

  return (
          <View style = {styles.Container}>



              <View style={styles.TextContainer}>
                  <Text style={styles.TextField}>
                      Bank Balance : {bankBal /*checkBal(name)*/}
                      {/* replace amount with bank balance from user */}
                  </Text>

                  <Text style={styles.TextField}>
                      Add : {amount}
                  </Text>
              </View>

              <View style={styles.ButtonContainer}>
                <View style={styles.Button}>
                    <Button onPress = {clearAmount} title = "Clear" />
                </View>
                <View style={styles.Button}>
                    <Button title = "Add to Balance" onPress={() => addBalance()}
                     />
                </View>
              </View>

              <View style={styles.ImageContainer}>
                  <TouchableOpacity onPress={() =>addAmount(1)}>
                      <Image source={require("./images/chip/1.png")} style = {styles.ImageClass}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() =>addAmount(5)}>
                      <Image source={require("./images/chip/5.png")} style = {styles.ImageClass}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() =>addAmount(25)}>
                      <Image source={require("./images/chip/25.png")} style = {styles.ImageClass}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() =>addAmount(100)}>
                      <Image source={require("./images/chip/100.png")} style = {styles.ImageClass}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() =>addAmount(500)}>
                      <Image source={require("./images/chip/500.png")} style = {styles.ImageClass}/>
                  </TouchableOpacity>
              </View>


          </View>
      )
}

const styles = StyleSheet.create(
{
    Container: {
        flex: 1,
    },
    ImageContainer:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    BoxContainer: {
        flex: 7,
        backgroundColor: 'green',

    },
    ButtonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: 'purple'
    },
    TextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        color: 'dark black'
    },
    ImageClass: {
        width: 50,
        height: 60
    },
    Button: {
        width: 120,
    },
    TextField: {
        fontSize: 20,
        color: 'black'
    }
}
)

export default AddMoney;
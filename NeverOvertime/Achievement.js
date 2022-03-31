import React, { useState, useEffect } from 'react';
import {apiAddress} from './ApiConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

/* Defines all the achievements and view for the achievement page. */
function Achievement({}) {
  const [refresh, setRefresh] = useState(false);
  const [balance, setBalance] = useState(0);
  const [userid, setUserid] = useState(0);

  const [wins, setWins] = useState(0);
  const [blackjacks, setBlackjacks] = useState(0);
  const [loses, setLoses] = useState(0);
  const [bankrupts, setBankrupts] = useState(0);
  /* All achievements. Each achievement has a type, text, prize, required, price, key */
  const [achievement, setAchievement] = useState([
    {type:1, text: 'Win 1 round of game', prize: 'Reward $10', required:1, price:10, key : 1, disabled: false}, /* no key property and any other; change in Flatlist*/
    {type:1,text: 'Win 10 round of game', prize: 'Reward $100',required:10,price:100, key : 2, disabled: false},
    {type:1,text: 'Win 100 round of game', prize: 'Reward $1,000',required:100,price:1000, key : 3, disabled: false},
    {type:1,text: 'Win 1000 round of game', prize: 'Reward $10,000',required:1000,price:10000, key : 4, disabled: false},
    {type:1,text: 'Win 10000 round of game', prize: 'Reward $100,000',required:10000,price:100000, key : 5, disabled: false},
    {type:2,text: 'Lose 5 rounds of game', prize: 'Reward $1,000',required:5,price:1000, key : 6, disabled: false},
    {type:2,text: 'Lose 10 rounds of game', prize: 'Reward $2,000',required:10,price:2000, key : 7, disabled: false},
    {type:2,text: 'Lose 20 rounds of game', prize: 'Reward $4,000',required:20,price:4000, key : 8, disabled: false},
    {type:2,text: 'Lose 30 rounds of game', prize: 'Reward $8,000',required:30,price:8000, key : 9, disabled: false},
    {type:2,text: 'Lose 50 rounds of game', prize: 'Reward $16,000',required:50,price:16000, key : 10, disabled: false},
    {type:3,text: 'Get a blackjack(21)', prize: 'Reward $500',required:1,price:500, key : 11, disabled: false},
    {type:3,text: 'Get 20 blackjack(21)', prize: 'Reward $2,000',required:20,price:2000, key : 12, disabled: false},
    {type:3,text: 'Get 100 blackjack(21)', prize: 'Reward $8,000',required:100,price:8000, key : 13, disabled: false},
    {type:3,text: 'Get 200 blackjack(21)', prize: 'Reward $24,000',required:200,price:24000, key : 14, disabled: false},
    {type:3,text: 'Get 1000 blackjack(21)', prize: 'Reward $100,000',required:1000,price:100000, key : 15, disabled: false},
    {type:4,text: 'First time Bankrupt', prize: 'Reward $500',required:1,price:500, key : 16, disabled: false},
    {type:4,text: '5th time Bankrupt', prize: 'Reward $2,000',required:5,price:2000, key : 17, disabled: false},
    {type:4,text: '10th time Bankrupt', prize: 'Reward $4,000',required:10,price:4000, key : 18, disabled: false},
    {type:4,text: '15th time Bankrupt', prize: 'Reward $8,000',required:15,price:8000, key : 19, disabled: false},
    {type:4,text: '20th time Bankrupt', prize: 'Reward $16,000',required:20,price:16000, key : 20, disabled: false},
  ])
    const completeAchievement = (key, price, type, required) => {
//        let ach = achievement.find((a) => {return a.key == key});
//        ach.disabled = true;
//        alert(key);
//        setAchievement(achievement);
//        setRefresh(!refresh);
          if (type == 1){
            if (wins < required){
                alert('You have not complete the achievement');
                return;
            }
          }
          if (type == 2){
            if (loses < required){
                alert('You have not complete the achievement');
                    return;
            }
          }
          if (type == 3){
            if (blackjacks < required){
                alert('You have not complete the achievement');
                    return;
            }
          }
          if (type == 4){
            if (bankrupts < required){
                alert('You have not complete the achievement');
                    return;
            }
          }


           fetch('http://' + apiAddress + ':3000/api/user/addAchievement', { //change your ip addressn here
            method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              "userid": userid,
              "achievementId": key
            })
          })
          .then(response => response.json())
          .then((serverResponse) => {
              alert('Collected Achievement');
          })
          //Update Balance
          fetch('http://' + apiAddress + ':3000/api/user/updatebalance', { //change your ip addressn here
                      method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
                      headers: {
                          'Content-Type' : 'application/json'
                      },
                      body: JSON.stringify({
                        "userid": userid,
                        "newbalance": parseInt(balance) + price
                      })
                    })
                    .then(response => response.json())
                    .then((serverResponse) => {
                        alert('Achievement Bonus added to balance');
                        setUserBalance(parseInt(balance) + price)
                    })
    }
    async function getUserData(){
      var userid = await AsyncStorage.getItem("user_id");
      setUserid(userid);
      var balance = await AsyncStorage.getItem("user_balance");
      setBalance(balance);
      var wins = await AsyncStorage.getItem("user_wins");
      setWins(wins);
      var loses = await AsyncStorage.getItem("user_loses");
      setLoses(loses);
      var bankrupts = await AsyncStorage.getItem("user_bankrupts");
      setBankrupts(bankrupts);
      var blackjacks = await AsyncStorage.getItem("user_blackjacks");
      setBlackjacks(blackjacks);
    }
//    async function getUserId(){
//           var userid = await AsyncStorage.getItem("user_id");
//           setUserid(userid);
//    }
//    async function getUserBalance(){
//           var balance = await AsyncStorage.getItem("user_balance");
//           setBalance(balance);
//    }
    async function setUserBalance(newBalance){
       await AsyncStorage.setItem('user_balance', newBalance.toString());
    }
    useEffect(() => {
    getUserData();
        if(userid != 0){
        fetch('http://'+apiAddress+':3000/api/user/getAchievements?userid=' + userid, {
                               method: 'GET', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
                               headers: {
                                   'Content-Type' : 'application/json'
                               }
                             })
                             .then(response => response.json())
                             .then((serverResponse) => {
                             console.log(serverResponse);
                               if(serverResponse != []){
                                    for(i = 0; i< serverResponse.length;i++){
                                        let ach = achievement.find((a) => {return a.key == serverResponse[i]['achievementId']});
                                        console.log(ach);
                                        ach.disabled = true;
                                    }
                                    setRefresh(!refresh);
                               }

                             })
        }

      });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Achievements</Text> 
        </View>
        <View style={styles.listcontainer}>
          <Text style={styles.message}>Click on the achievement to claim reward</Text>
          <View style={styles.list}>
            <FlatList 
              /*keyExtractor={(item) => item.text} if key property is change to another id*/
              /*In TouchableOpacity, missing onPress property because achievement system has not set up yet */
              data={achievement}
              extraData={refresh}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => completeAchievement(item.key,item.price, item.type, item.required)} disabled = {item.disabled}>
                  <View style={item.disabled? styles.itemClicked : styles.item} >
                    <Text style={item.disabled ? styles.itemTextClicked : ''}>{item.prize}</Text>
                    <Text style={item.disabled ? styles.itemTextClicked : ''}>{item.text}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container : {
      flex: 1,
    },
    header: {
      backgroundColor: 'coral',
      padding: 20,
    },

    title : {
      fontSize: 40,
      color: "#fff",
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },
    item : {
      padding: 20,
      borderColor: '#bbb',
      borderWidth: 4,
      borderStyle: 'solid',
      borderRadius: 20,
      marginBottom: 10
      
    },
    itemClicked : {
          padding: 20,
          borderColor: '#bbb',
          borderWidth: 4,
          borderStyle: 'solid',
          borderRadius: 20,
          marginBottom: 10,
          backgroundColor: 'coral',
    },
    itemTextClicked : {
        color: '#fff'
    },
    listcontainer : {
      flex: 1,
      marginTop: 15,
      marginBottom: 15
    },
    list: {
      marginBottom: 20,
    },
    message: {
      marginBottom: 10,
      textAlign: 'center'
    }

  })

  export default Achievement
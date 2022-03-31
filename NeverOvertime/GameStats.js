import React,{useEffect, useState}  from 'react';
import type {Node} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Section,
  Text,
  TextInput,
  useColorScheme,
  Button,
  Title,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { checkFollowers, checkFollowing } from './PlayerFollow';
import AsyncStorage from '@react-native-async-storage/async-storage';

function GameStats ({ navigation }){
    const [username, setUsername] = useState("");
    const [winsCount, setWinsCount] = useState("");
    const [winsRate, setWinsRate] = useState("");
    const [losesCount, setLosesCount] = useState("");
    const [losesRate, setLosesRate] = useState("");
    const [blackjackCount, setBlackJackCount] = useState("");
    const [blackjackRate, setBlackJackRate] = useState("");
    const [bankruptsCount, setBankruptsCount] = useState("");
    const [bankruptsRate, setBankruptsRate] = useState("");
    const [gameCount, setGameCount] = useState("");
async function getUserData(){
            var username = await AsyncStorage.getItem("user_username");
//            var winsCount = await AsyncStorage.getItem("user_wins");
//            var losesCount = await AsyncStorage.getItem("user_loses");
//            var blackjackCount = await AsyncStorage.getItem("user_blackjack");
//            var bankruptsCount = await AsyncStorage.getItem("user_bankrupts");
//            var gameCount = winsCount+losesCount+blackjackCount+bankruptsCount;
//            var winsRate = round(winsCount/gameCount*100,2);
//            var losesRate = round(losesCount/gameCount*100,2);
//            var blackjackRate = round(blackjackCount/gameCount*100,2);
//            var bankruptsRate = round(bankruptsCount/gameCount*100,2);
            console.warn(username);
            setUsername(username);
//            setWinsCount(winsCount);
//            setLosesCount(losesCount);
//            setBlackJackCount(blackjackCount);
//            setBankruptsCount(bankruptsCount);
//            setGameCount(gameCount);
//            setWinsRate(winsRate);
//            setLosesRate(losesRate);
//            setBlackJackRate(blackjackRate);
//            setBankruptsRate(bankruptsRate);


        }
    useEffect(() => {

        getUserData();
    });

    return (
    <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                console.log('dismissed');
                }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text>Game Stats</Text>
              <Text>Username : {username}</Text>
              <Text>Wins : {winsCount} ({winsRate}%) </Text>
              <Text>Loses : {losesCount} ({losesRate}%) </Text>
              <Text>Blackjack : {blackjackCount} ({blackjackRate}%) </Text>
              <Text>Bankrupts : {bankruptsCount} ({bankruptsRate}%) </Text>
              <Text>Total Game Count : {gameCount}</Text>
              <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
        </TouchableWithoutFeedback>
    )
}

export default GameStats;
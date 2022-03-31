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
    const [winsCount, setWinsCount] = useState(0);
    const [winsRate, setWinsRate] = useState(0);
    const [losesCount, setLosesCount] = useState(0);
    const [losesRate, setLosesRate] = useState(0);
    const [blackjackCount, setBlackJackCount] = useState(0);
    const [blackjackRate, setBlackJackRate] = useState(0);
    const [bankruptsCount, setBankruptsCount] = useState(0);
    const [bankruptsRate, setBankruptsRate] = useState(0);
    const [gameCount, setGameCount] = useState(0);
async function getUserData(){
            var username = await AsyncStorage.getItem("user_username");
            var winsCount = await AsyncStorage.getItem("user_wins");
            var losesCount = await AsyncStorage.getItem("user_loses");
            var blackjackCount = await AsyncStorage.getItem("user_blackjacks");
            var bankruptsCount = await AsyncStorage.getItem("user_bankrupts");
            var gameCount = parseInt(winsCount)+parseInt(losesCount)+parseInt(blackjackCount)+parseInt(bankruptsCount);
            var winsRate = Math.round(winsCount/gameCount*100);
            var losesRate = Math.round(losesCount/gameCount*100);
            var blackjackRate = Math.round(blackjackCount/gameCount*100);
            var bankruptsRate = Math.round(bankruptsCount/gameCount*100);
//            console.warn(username);
            setUsername(username);
            setWinsCount(winsCount);
            setLosesCount(losesCount);
            setBlackJackCount(blackjackCount);
            setBankruptsCount(bankruptsCount);
            setGameCount(gameCount);
            setWinsRate(winsRate);
            setLosesRate(losesRate);
            setBlackJackRate(blackjackRate);
            setBankruptsRate(bankruptsRate);


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
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
  ImageBackground
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
    const [balance, setBalance] = useState(0);

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
            var balance = await AsyncStorage.getItem("user_balance");

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
            setBalance(balance);


        }
    useEffect(() => {

        getUserData();
    });

    return (
    <ImageBackground source={require('./images/background/bgn.jpg') } resizeMode="cover" style={{flex:1, 
        justifyContent: 'center'}}>

    <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                console.log('dismissed');
                }}>
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text style={{ fontSize: 40 , color : 'white', fontWeight : 'bold'}}>Game Stats</Text>
            <Text>{"\n"}</Text>
            <Text style={{ fontSize: 25 , fontStyle:'italic', color: 'white'}}> Username : {username}</Text>
            <Text style={{ fontSize: 25 , fontStyle:'italic', color: 'white' }}>Balance : {balance}</Text>
            <Text>{"\n"}</Text>
            <Text style={{ fontSize: 20 , fontStyle:'italic', color: 'orange' }}>Wins : {winsCount} ({winsRate}%) </Text>
            <Text style={{ fontSize: 20 , fontStyle:'italic', color: 'orange' }}>Loses : {losesCount} ({losesRate}%) </Text>
            <Text style={{ fontSize: 20 , fontStyle:'italic', color: 'orange' }}>Blackjack : {blackjackCount} ({blackjackRate}%) </Text>
            <Text style={{ fontSize: 20 , fontStyle:'italic', color: 'orange' }}>Bankrupts : {bankruptsCount} ({bankruptsRate}%) </Text>
            <Text>{"\n"}</Text>
            <Text style={{ fontSize: 20 , fontStyle:'italic', color: 'white'}}>Total Game Count : {gameCount}</Text>
            <Text>{"\n"}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
        </TouchableWithoutFeedback>
    </ImageBackground>
    )
}

export default GameStats;
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Button , Text, ImageBackground} from "react-native"
import {addBal, subBal, checkBal} from "./EditBalance.js"
import {apiAddress} from './ApiConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { shopItem } from "./shopItems.js"

var invList = [0, 0, 0, 0, 0, 0, 0];
var purchasedList = [0, 0, 0, 0, 0, 0, 0]; // use for now, later purchased item should be in database
/* Defines betting features and the view to bet currency and view bet in-game. */
export default function Bet({ navigation, route }) {
    const [balance, setBalance] = useState(0);
    const [cost, setCost] = useState(0);
    const [userid, setUserid] = useState(0);
    const [cart, setCart] = useState([]);
    async function getUserData(){
       var balance = await AsyncStorage.getItem("user_balance");
       setBalance(balance);
       var userid = await AsyncStorage.getItem("user_id");
       setUserid(userid);
    }
    async function setUserBalance(newBalance){
       await AsyncStorage.setItem('user_balance', newBalance.toString());
    }
     useEffect(() => {
        getUserData();

     });

    const addToCart=(price, address)=>{
        if (!cart.includes(address)){
            setCart(cart + [address]);
            addCost(price);
        }
    }

    const storeInServer=(price)=>{
        return price;
    }

    const addCost=(price)=>{
        setCost(cost + price);
    }


    const payPrice=(price)=>{
        setUserBalance(balance - price);

        fetch('http://' + apiAddress + ':3000/api/user/updatebalance', { //change your ip addressn here
        method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
                                      headers: {
                                          'Content-Type' : 'application/json'
                                      },
                                      body: JSON.stringify({
                                        "userid": userid,
                                        "newbalance": parseInt(balance) - price
                                      })
                                    })
                                    .then(response => response.json())
                                    .then((serverResponse) => {
                                     setBalance(parseInt(balance) - price);
                                    })
    }

    const clearCost = () => {
        setCost(0);
    }

    const clearCart = () => {
        clearCost();
        clearInventory();
        setCart([]);

    }

    const purchase = () =>{
        payPrice(cost);
        clearCost();
        itemPurchased();
        clearInventory();
    }

    function itemPurchased(){
        invList.forEach((val, index) => purchasedList[index] = invList[index])
    }

    function clearInventory(){
        invList.forEach((val, index) => invList[index] = 0);
    }

    return (
        <ImageBackground source={require('./images/background/bgn.jpg') } resizeMode="cover" style={{flex:1, 
            justifyContent: 'center'}}> 
        
        <View style = {styles.Container}>

            <View style={styles.ItemsContainer}>
                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(100, "./images/icons/icon1.png"); invList[0] = 1;}}>
                        <Image source={require("./images/icons/icon1.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:100
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(125, "./images/icons/icon2.png"); invList[1] = 1;}}>
                        <Image source={require("./images/icons/icon2.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:125
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(125, "./images/icons/icon3.png"); invList[2] = 1;}}>
                        <Image source={require("./images/icons/icon3.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:125
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(100, "./images/icons/icon4.png"); invList[3] = 1;}}>
                        <Image source={require("./images/icons/icon4.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:100
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(150, "./images/icons/icon5.png"); invList[4] = 1;}}>
                        <Image source={require("./images/icons/icon5.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:150
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(80, "./images/icons/icon6.png"); invList[5] = 1;}}>
                        <Image source={require("./images/icons/icon6.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:80
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>{addToCart(60, "./images/icons/icon7.png"); invList[6] = 1;}}>
                        <Image source={require("./images/icons/icon7.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:60
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

            </View>   

            <View style={styles.ButtonContainer}>
                <View style={styles.Button}>
                    <Button 
                        onPress = {clearCart}
                        title = "Clear Cart"
                        color = "green"
                    />
                </View>
                <View style={styles.Button}>
                    <Button
                        onPress = {purchase}
                        title = "Purchase"
                        color = "red"
                    />
                </View>
                <View style={styles.Button}>
                    <Button
                        onPress = {() => navigation.navigate('Inventory')}
                        title = "Inventory"
                        color = "hotpink"
                    />
                </View>
            </View>

            <View style={styles.TextContainer}>
                <Text style={styles.TextField}>
                    Cost : {cost} 
                    {/* replace betAmount with bank balance from user */}
                </Text>


                <Text style={styles.TextField}>
                    Current Balance : {balance}
                </Text>
            </View>

        </View> 
        </ImageBackground>
    )
}

const styles = StyleSheet.create(
{
    Container: {
        flex: 1,
        // backgroundColor : 'white', 
        
    },
    ItemContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',       
    },
    ItemTextContainer: {
        fontSize: 18,
        color: 'orange'
        
    },
    ItemsContainer:{
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',      
    },
    ButtonContainer: {
        flex: 2, 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    TextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'dark black'
    },
    ImageClass: {
        width: 50,
        height: 50
    },
    Button: {
        width: 120,
    },
    TextField: {
        fontSize: 20,
        color: 'orange'
    }
}
)


export {invList, purchasedList};
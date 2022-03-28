import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Button , Text} from "react-native"
import {addBal, subBal, checkBal} from "./EditBalance.js"
import {apiAddress} from './ApiConfig'

/* Defines betting features and the view to bet currency and view bet in-game. */
export default function Bet() {
    const [balance, setBalance] = useState(1000);

    // useEffect(() => {
    //     fetch('http://'+apiAddress+':3000/api/user?id=' + route.params.userid, {
    //         method: 'GET', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then((serverResponse) => {
    //         console.warn(serverResponse)
    //         if(serverResponse == {}){
    //             Alert.alert('', "User does not exist");
    //             navigation.navigate('Home');
    //         }else{
    //             setBalance(serverResponse["Balance"])
    //         }
    //     })
    // });

    
    const [cost, setCost] = useState(0);
    const addCost=(price)=>{
        setCost(cost + price);
    }


    const payPrice=(price)=>{
        setBalance(balance - price);
    }

    const clearCost = () => {
        setCost(0);
    }

    const clearCart = () => {
        clearCost();
    }

    const purchase = () =>{
        payPrice(cost);
        clearCost();
    }

    return (
        <View style = {styles.Container}>

            <View style={styles.ItemsContainer}>
                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>addCost(100)}>
                        <Image source={require("./images/icons/icon1.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:100
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>addCost(125)}>
                        <Image source={require("./images/icons/icon2.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:125
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>addCost(125)}>
                        <Image source={require("./images/icons/icon3.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:125
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>addCost(100)}>
                        <Image source={require("./images/icons/icon4.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:100
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>addCost(150)}>
                        <Image source={require("./images/icons/icon5.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:150
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>addCost(80)}>
                        <Image source={require("./images/icons/icon6.png")} style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style={styles.ItemTextContainer}>
                        Cost:80
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    <TouchableOpacity onPress={() =>addCost(60)}>
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
    )
}

const styles = StyleSheet.create(
{
    Container: {
        flex: 1,
        backgroundColor : 'white', 
        
    },
    ItemContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',       
    },
    ItemTextContainer: {
        fontSize: 18,
        color: 'black'
        
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
        color: 'black'
    }
}
)
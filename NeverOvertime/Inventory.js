import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Button , Text} from "react-native"
import {addBal, subBal, checkBal} from "./EditBalance.js"
import {apiAddress} from './ApiConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {invList} from Shop;

/* Defines betting features and the view to bet currency and view bet in-game. */
export default function Bet({ navigation, route }) {

     useEffect(() => {
        getUserData();

     });

    return (
        <View style = {styles.Container}>

            <View style={styles.ItemsContainer}>
                <View style={styles.ItemContainer}>
                    
                    <Image source={require("./images/icons/icon1.png")} style = {styles.ImageClass}/>

                    <Text style={styles.ItemTextContainer}>
                        Cost:100
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    
                    <Image source={require("./images/icons/icon2.png")} style = {styles.ImageClass}/>
                    
                    <Text style={styles.ItemTextContainer}>
                        Cost:125
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    
                    <Image source={require("./images/icons/icon3.png")} style = {styles.ImageClass}/>
                    
                    <Text style={styles.ItemTextContainer}>
                        Cost:125
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    
                    <Image source={require("./images/icons/icon4.png")} style = {styles.ImageClass}/>
                    
                    <Text style={styles.ItemTextContainer}>
                        Cost:100
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    
                    <Image source={require("./images/icons/icon5.png")} style = {styles.ImageClass}/>
                    
                    <Text style={styles.ItemTextContainer}>
                        Cost:150
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    
                    <Image source={require("./images/icons/icon6.png")} style = {styles.ImageClass}/>
                    
                    <Text style={styles.ItemTextContainer}>
                        Cost:80
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

                <View style={styles.ItemContainer}>
                    
                    <Image source={require("./images/icons/icon7.png")} style = {styles.ImageClass}/>
                    
                    <Text style={styles.ItemTextContainer}>
                        Cost:60
                        {/* replace betAmount with bank balance from user */}
                    </Text>
                </View>

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
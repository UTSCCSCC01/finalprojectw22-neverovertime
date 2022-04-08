import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Button , Text, ImageBackground} from "react-native"
import {addBal, subBal, checkBal} from "./EditBalance.js"
import {apiAddress} from './ApiConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {invList} from "./Shop.js";

/* Defines betting features and the view to bet currency and view bet in-game. */
function Inventory({ navigation, route }) {

    function displayItem1(){

        if (invList[0] == 1){

            return <Image source={require("./images/icons/icon1.png")} style = {styles.ImageClass}/>
        }
        return null
  
    }

    function displayItem2(){

        if (invList[1] == 1){

            return <Image source={require("./images/icons/icon2.png")} style = {styles.ImageClass}/>
        }
        return null
  
    }

    function displayItem3(){

        if (invList[2] == 1){

            return <Image source={require("./images/icons/icon3.png")} style = {styles.ImageClass}/>
        }
        return null
  
    }

    function displayItem4(){

        if (invList[3] == 1){

            return <Image source={require("./images/icons/icon4.png")} style = {styles.ImageClass}/>
        }
        return null
  
    }

    function displayItem5(){

        if (invList[4] == 1){

            return <Image source={require("./images/icons/icon5.png")} style = {styles.ImageClass}/>
        }
        return null
  
    }

    function displayItem6(){

        if (invList[5] == 1){

            return <Image source={require("./images/icons/icon6.png")} style = {styles.ImageClass}/>
        }
        return null
  
    }

    function displayItem7(){

        if (invList[6] == 1){

            return <Image source={require("./images/icons/icon7.png")} style = {styles.ImageClass}/>
        }
        return null
  
    }

    return (
        <ImageBackground source={require('./images/background/bgn.jpg') } resizeMode="cover" style={{flex:1, 
            justifyContent: 'center'}}> 
        
        <View style = {styles.Container}>

            <View style={styles.ItemsContainer}>
                <View style={styles.ItemContainer}>
                    
                    {displayItem1()}

                </View>

                <View style={styles.ItemContainer}>
                    
                    {displayItem2()}
                    
                </View>

                <View style={styles.ItemContainer}>
                    
                    {displayItem3()}

                </View>

                <View style={styles.ItemContainer}>
                    
                    {displayItem4()}

                </View>

                <View style={styles.ItemContainer}>
                    
                    {displayItem5()}

                </View>

                <View style={styles.ItemContainer}>
                    
                    {displayItem6()}

                </View>

                <View style={styles.ItemContainer}>
                    
                    {displayItem7()}
                    
                </View>

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

export default Inventory;
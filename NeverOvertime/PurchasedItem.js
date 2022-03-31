import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Button , Text, ImageStore} from "react-native"
import {addBal, subBal, checkBal} from "./EditBalance.js"
import {apiAddress} from './ApiConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {purchasedList} from "./Shop.js";

const PurchasedItem = () =>{
    function displayItem1(){
        if ([0] == 1){
            return <Image source={require("./images/icons/icon1.png")} style = {styles.ImageClass}/>
        }
        return null
    }

    function displayItem2(){
        if (purchasedList[1] == 1){
            return <Image source={require("./images/icons/icon2.png")} style = {styles.ImageClass}/>
        }
        return null
    }

    function displayItem3(){
        if (purchasedList[2] == 1){
            return <Image source={require("./images/icons/icon3.png")} style = {styles.ImageClass}/>
        }
        return null
    }

    function displayItem4(){
        if (purchasedList[3] == 1){
            return <Image source={require("./images/icons/icon4.png")} style = {styles.ImageClass}/>
        }
        return null
    }

    function displayItem5(){
        if (purchasedList[4] == 1){
            return <Image source={require("./images/icons/icon5.png")} style = {styles.ImageClass}/>
        }
        return null
    }

    function displayItem6(){
        if (purchasedList[5] == 1){
            return <Image source={require("./images/icons/icon6.png")} style = {styles.ImageClass}/>
        }
        return null
    }

    function displayItem7(){
        if (purchasedList[6] == 1){
            return <Image source={require("./images/icons/icon7.png")} style = {styles.ImageClass}/>
        }
        return null
    }

    return(
        <View style = {styles.Container}>
            <View style={styles.ItemsContainer}>
                <View style={styles.ItemContainer}>
                    {/* {Image_purchased.map((image, index) => {
                        return <Image source={required(image.url)} style = {styles.ImageClass} />
                    })} */} 
                    {/* {Use the code above to display image when getting data from api} */}
                    {displayItem1()}
                    {displayItem2()}
                    {displayItem3()}
                    {displayItem4()}
                    {displayItem5()}
                    {displayItem6()}
                    {displayItem7()}

                </View>
            </View>   

    </View> 
    );
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

export default PurchasedItem;
import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Button , Text} from "react-native"

/* Defines betting features and the view to bet currency and view bet in-game. */
export default function Bet() {

    
    // let totalBank = props.totalBank
    const [betAmount, setBetAmount] = useState(0);

    const addbet=(amount)=>{
        setBetAmount(betAmount + amount);
    }

    const clearbet = () => {
        setBetAmount(0);
    }

    return (
        <View style = {styles.Container}>
            <Text style={styles.TextField}>
                  Current Bet : {betAmount}
            </Text>
            <View style={styles.BoxContainer}>
            {/* Empty Container to push other to the bottom of the screen */}
            </View>
            <View style={styles.ButtonContainer}>
                <View style={styles.Button}>
                    <Button 
                        onPress = {clearbet}
                        title = "Clear"
                        color = "red"
                    />
                </View>
                <View style={styles.Button}>
                    <Button
                        // onPress = {handlePress}
                        title = "Deal"
                        color = "red"
                    />
                </View>
            </View>
            <View style={styles.TextContainer}>
                <Text style={styles.TextField}>
                    Bank Balance : {betAmount} 
                    {/* replace betAmount with bank balance from user */}
                </Text>


                <Text style={styles.TextField}>
                    Total Bet : {betAmount}
                </Text>
            </View>
            <View style={styles.ImageContainer}>
                <TouchableOpacity onPress={() =>addbet(1)}>
                    <Image source={require("./images/chip/1.png")} style = {styles.ImageClass}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>addbet(5)}>
                    <Image source={require("./images/chip/5.png")} style = {styles.ImageClass}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>addbet(25)}>
                    <Image source={require("./images/chip/25.png")} style = {styles.ImageClass}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>addbet(100)}>
                    <Image source={require("./images/chip/100.png")} style = {styles.ImageClass}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>addbet(500)}>
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
        backgroundColor : 'pink', 
        
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
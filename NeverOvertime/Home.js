import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Section,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  ImageBackground,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { checkBal } from './EditBalance.js';


/* Defines the Home page view.
Home page is the main page a user should see, contains buttons to important pages.
*/
function Home ({ navigation, route }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/background/bgn.jpg') } resizeMode="cover" style={styles.image}>
      <View style={styles.tokenClass} >
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
      </View>
        <Text style={styles.Text}>Home</Text>
        <View style={styles.tokenClass} >
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
        <Image source={require('./images/chip/1.png')} style={styles.token} />
      </View>
        <View style={styles.buttons}>
          <Button title="Play" onPress={() => navigation.navigate('GamePage')} />
          <Button title="View Profile" onPress={() => navigation.push('AccountView')} />
          <Button title="Achievement" onPress={() => navigation.navigate('Achievement')} />
          <Button title="GameStats" onPress={() => navigation.navigate('GameStats')} />
          <Button title="Add to Balance" onPress={() => navigation.navigate('AddMoney')} />
          <Button title="Shop" onPress={() => navigation.navigate('Shop')} />
          <Button title="Logout" onPress={() => navigation.popToTop()} />
        </View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex:1, 
    justifyContent: 'center'
  },
  buttons: {
    marginHorizontal: 100, 
    justifyContent: 'space-between',

  },
  Text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: "white",
    justifyContent: 'center',
    marginLeft: 140,
  },
  token: {
    height: 50, 
    width: 50,
    marginBottom: 20
  },
  tokenClass: {
    flexDirection: 'row'
  }
  
})
export default Home;
import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

function Achievement({}) {
  const [achievement, setAchievement] = useState([
    {text: 'Win 1 round of blackjack', prize: 'Reward $10', key : 1}, /* no key property and any other; change in Flatlist*/
    {text: 'Win 10 round of blackjack', prize: 'Reward $100', key : 2},
    {text: 'Win 100 round of blackjack', prize: 'Reward $1,000', key : 3},
    {text: 'Win 1000 round of blackjack', prize: 'Reward $10,000', key : 4},
    {text: 'Win 10000 round of blackjack', prize: 'Reward $100,000', key : 5},
    {text: 'Win 5 rounds in a row', prize: 'Reward $1,000', key : 6},
    {text: 'Win 10 rounds in a row	', prize: 'Reward $2,000', key : 7},
    {text: 'Win 20 rounds in a row', prize: 'Reward $4,000', key : 8},
    {text: 'Win 30 rounds in a row', prize: 'Reward $8,000', key : 9},
    {text: 'Win 50 rounds in a row', prize: 'Reward $16,000', key : 10},
    {text: 'Get a blackjack(21)', prize: 'Reward $500', key : 11},
    {text: 'Get 2 blackjack(21) in a row', prize: 'Reward $2,000', key : 12},
    {text: 'Get 3 blackjack(21) in a row', prize: 'Reward $8,000', key : 13},
    {text: 'Get 4 blackjack(21) in a row', prize: 'Reward $24,000', key : 14},
    {text: 'Get 5 blackjack(21) in a row', prize: 'Reward $100,000', key : 15},
    {text: 'First time Bankrupt', prize: 'Reward $500', key : 16},
    {text: '5th time Bankrupt', prize: 'Reward $2,000', key : 17},
    {text: '10th time Bankrupt', prize: 'Reward $4,000', key : 18},
    {text: '15th time Bankrupt', prize: 'Reward $8,000', key : 19},
    {text: '20th time Bankrupt', prize: 'Reward $16,000', key : 20},
  ])


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Achievements</Text> 
        </View>
        <View style={styles.listcontainer}>
          <Text style={styles.message}>Click on the achievement to claim reward</Text>
          <View style={styles.list}>
          <Image source={require('../assets/achievement_star.png')} />;
            <FlatList 
              /*keyExtractor={(item) => item.text} if key property is change to another id*/
              /*In TouchableOpacity, missing onPress property because achievement system has not set up yet */
              data={achievement}
              renderItem={({ item }) => (
                <TouchableOpacity >
                  <View style={styles.item}>
                    <Text >{item.prize}</Text>
                    <Text >{item.text}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container : {
      flex: 1,
    },
    header: {
      backgroundColor: 'coral',
      padding: 20,
    },

    title : {
      fontSize: 40,
      color: "#fff",
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },
    item : {
      padding: 20,
      borderColor: '#bbb',
      borderWidth: 4,
      borderStyle: 'solid',
      borderRadius: 20,
      marginBottom: 10
      
    },
    listcontainer : {
      flex: 1,
      marginTop: 15,
      marginBottom: 15
    },
    list: {
      marginBottom: 20,
    },
    message: {
      marginBottom: 10,
      textAlign: 'center'
    }

  })

  export default Achievement
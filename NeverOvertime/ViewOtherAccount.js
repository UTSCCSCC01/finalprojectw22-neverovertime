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
  Title,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* View to see other user's account details.
Users can see the profile details of other user accounts
*/
function AccountView ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>View Other User Profile</Text>
          <Text>Username : User A</Text>
          <Text>Account Status : Active</Text>
          <Text>Balance: 500</Text>
          <Button title="Check Another" onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

export default ViewOtherAccount
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Achievement } from './components/Achievement';

/*This code should be in home.js */
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Achievement"
        onPress={() => navigation.navigate('Achievement')}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    /*This code should be in home.js */
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Achievement" component={Achievement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

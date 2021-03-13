import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/homeScreen';
import CounterScreen from './src/screen/counterScreen';
import ApiScreen from './src/screen/apiScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ApiScreen" component={ApiScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
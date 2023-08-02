// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Kakao from './src/Kakao';
import End from './src/End';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Kakao" component={Kakao} 
         options={{ headerTitleAlign: 'center',  
         //  headerStyle: { backgroundColor: '#ffe812',}, 
           }}/>
          <Stack.Screen name="End" component={End}    options={{ headerTitleAlign: 'center',  
         //  headerStyle: { backgroundColor: '#ffe812',}, 
           }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
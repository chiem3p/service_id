import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screen/Login'
import SignupScreen from './src/screen/Signup'
import HomeScreen from './src/screen/Home'

import Facebook from './src/screen/Facebook'
import Tiktok from './src/screen/Tiktok'
import Instagram from './src/screen/Instagram'


const HomeTab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name="Facebook" component={Facebook} />
      <HomeTab.Screen name="Tiktok" component={Tiktok} />
      <HomeTab.Screen name="Instagram" component={Instagram} />
    </HomeTab.Navigator>
  );
}


const AuthStack = createStackNavigator();
function App() { 
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen}
          options={
            {
              headerTransparent: true,
              title: ''
            }
          } />
        <AuthStack.Screen name="Home" component={HomeStackScreen}
          options={
            {
              headerTransparent: true,
              headerLeft:null,
              title: ''
            }
          } />
        <AuthStack.Screen name="Signup" component={SignupScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import { View, Text } from 'react-native'
import React from 'react'
import Login from '../screens/Login';
import Onboarding from '../screens/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Otp from '../screens/Otp';
import Tab from './Tab'
const Stack = createNativeStackNavigator();
const screenOptions = {
    headerShown:false
}
const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={screenOptions} name='Intro' component={Onboarding}></Stack.Screen>
        <Stack.Screen options={screenOptions} name='Login' component={Login}></Stack.Screen>
        <Stack.Screen options={screenOptions} name='Otp' component={Otp}></Stack.Screen>
        <Stack.Screen options={screenOptions} name='Home' component={Tab}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App
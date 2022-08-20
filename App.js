import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/Login';
import Onboarding from './src/screens/Onboarding';
import Contact from './src/screens/Contact';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import Otp from './src/screens/Otp';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Onboarding"
        activeColor="#293462"
        barStyle={{ backgroundColor: '#302621' }}
      >
        <Tab.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Otp"
          component={Otp}
          options={{
            tabBarLabel: 'Otp',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  {/* ... */}
      {/* <Contact/> */}
      {/* <Onboarding/> */}
      {/* <Login/> */}
    </>
  )
}

export default App

import React from 'react'
import Contact from '../screens/Contact';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FA from 'react-native-vector-icons/AntDesign';
import colors from '../constant/colors';
import Home from '../screens/Home';
// import User from '../screens/User';
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>

      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        inactiveColor="#fff"
        barStyle={{ backgroundColor: '#6986b3' }}
        
      >
         <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <FA name="home" color={color} size={26} />
            ),
          }}
        /> 
        <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <FA name="contacts" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>


    </>
  )
}

export default App
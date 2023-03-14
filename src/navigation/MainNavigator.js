import { View, Text } from 'react-native'
import React from 'react'
import Login from '../screens/Login';
import Onboarding from '../screens/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Otp from '../screens/Otp';
import Tab from './Tab'
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import Menu from '../screens/Menu';
import Privacy from '../screens/privacy';
import About from '../screens/about';
import FeedBack from '../screens/FeedBack';
import AuthContext, {defaultState, reducer, restoreToken} from './Auth';
import SelectLanguage from '../screens/SelectLanguage';
import DrawerNavigator from './DrawerNavigator';
import HomeLoan from '../screens/Forms/HomeLoan';
import CarLoan from '../screens/Forms/CarLoan';
import PersonalLoan from '../screens/Forms/PersonalLoan';
import ProfessionalLoan from '../screens/Forms/ProfessionalLoan';
import SecuredBusinessLoan from '../screens/Forms/SecuredBusinessLoan';
import SecuredOverdraftLimit from '../screens/Forms/SecuredOverdraftLimit';
import UnsecuredBusinessLoan from '../screens/Forms/UnsecuredBusinessLoan';
import UnsecuredOverdraftLimit from '../screens/Forms/UnsecuredOverdraftLimit';

const Stack = createNativeStackNavigator();
const screenOptions = {
    headerShown:false
}
const App = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);
	React.useEffect(() => {
		restoreToken(dispatch);
	  }, []); 
	  const authContext = React.useMemo(
		() => ({
		  signIn: (data) => {
			dispatch({type: 'SIGN_IN', token: data});
		  },
		  signOut: () => dispatch({type: 'SIGN_OUT'}),
		  signUp: (data) => {
			dispatch({type: 'SIGN_IN', token: data});
		  },
		}),
		[],
	  );
	 
	  if (state.isLoading) {
		return null;
	  }
  return (
    <>
    <NavigationContainer>
    <AuthContext.Provider value={authContext}> 
    <Stack.Navigator>
      {state.userToken == null ? (
            <>
            <Stack.Screen options={screenOptions} name='Lang' component={SelectLanguage}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='Intro' component={Onboarding}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='Login' component={Login}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='Otp' component={Otp}></Stack.Screen>
            </>) :(
            <>
              <Stack.Screen options={screenOptions} name='Home' component={Home}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='HomeLoan' component={HomeLoan}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='CarLoan' component={CarLoan}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='PersonalLoan' component={PersonalLoan}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='ProfessionalLoan' component={ProfessionalLoan}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='SecuredBusinessLoan' component={SecuredBusinessLoan}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='SecuredOverdraftLimit' component={SecuredOverdraftLimit}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='UnsecuredBusinessLoan' component={UnsecuredBusinessLoan}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='UnsecuredOverdraftLimit' component={UnsecuredOverdraftLimit}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='Contact' component={Contact}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='Menu' component={Menu}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='privacy' component={Privacy}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='about' component={About}></Stack.Screen>
              <Stack.Screen options={screenOptions} name='FeedBack' component={FeedBack}></Stack.Screen>
              <Stack.Screen name="Drawer" component={DrawerNavigator} />
            </>)}

      </Stack.Navigator>
    </AuthContext.Provider>
      
    </NavigationContainer>
    </>
  )
}

export default App
import React from 'react'
import { StyleSheet, Text ,Share,Alert} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import colors from '../constant/colors'
import HomeLoan from '../screens/Forms/HomeLoan'
import PersonalLoan from '../screens/Forms/PersonalLoan'
import SecuredBusinessLoan from '../screens/Forms/SecuredBusinessLoan'
import UnsecuredBusinessLoan from '../screens/Forms/UnsecuredBusinessLoan'
import SecuredOverdraftLimit from '../screens/Forms/SecuredOverdraftLimit'
import UnsecuredOverdraftLimit from '../screens/Forms/UnsecuredOverdraftLimit'
import CarLoan from '../screens/Forms/CarLoan'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {

	return ( 
		<NavigationContainer>
			<Drawer.Navigator 
			useLegacyImplementation
			initialRouteName='HomeLoan'
	 >
				<Drawer.Screen
					name='HomeLoan'
					component={HomeLoan}
				/>
	
			<Drawer.Screen
				name='Contribution'
				component={PersonalLoan}
			/> 
				<Drawer.Screen
					name='SecuredBusinessLoan'
					component={SecuredBusinessLoan}
				/>

				<Drawer.Screen
					name='UnsecuredBusinessLoan'
					component={UnsecuredBusinessLoan}
				/>

				<Drawer.Screen
					name='SecuredOverdraftLimit'
					component={SecuredOverdraftLimit}
				/>
				<Drawer.Screen
					name='UnsecuredOverdraftLimit'
					component={UnsecuredOverdraftLimit}
				/>
				<Drawer.Screen
					name='CarLoan'
					component={CarLoan}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

export default DrawerNavigator

const styles = StyleSheet.create({
	menu:{
		fontSize:14,color:colors.black
	}
})
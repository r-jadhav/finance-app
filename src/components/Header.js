import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../constant/colors'

const Header = ({ title, showDrawer }) => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			{showDrawer ? (
				<View style={styles.edge}>
					<TouchableOpacity
						onPress={() => {
							navigation.toggleDrawer()
						}}>
						<MCI name="menu" size={28} color="#fff" />
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.edge}>
					<TouchableOpacity
						onPress={() => {
							navigation.goBack()
						}}>
						<MCI name="arrow-left" size={28} color="#fff" />
					</TouchableOpacity>
				</View>
			)}
			<Text style={styles.title}>{title}</Text>
			<View style={styles.edge}>
				<TouchableOpacity
					onPress={() => {
						Linking.openURL('https://wa.me/918904822218')
					}}>
					<MCI name="whatsapp" size={28} color="#fff" />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.themeGreen,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 60,
		elevation: 3,
		zIndex: 10,
	},
	title: {
		fontSize: 22,
		color: '#fff',
		fontFamily: 'NunitoSans-SemiBold',
	},
	edge: {
		// borderWidth: 1,
		width: '20%',
		alignSelf: 'stretch',
		justifyContent: 'center',
		paddingLeft: 20,
	},
})

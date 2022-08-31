import { View, Text, Image, StyleSheet, Button, Alert,Separator  } from 'react-native'
import React from 'react'
import CircleButton from '../components/CircleButton';
import colors from '../constant/colors';
import Lottie from 'lottie-react-native';

const Onboarding = ({navigation}) => {
    const Separator = () => (
        <View style={styles.separator} />
      );
  return (
    <View style={styles.container}>
    <View style={{
        width:250,
        height:250,
        borderRadius:250,
        borderColor:'#fff',
        borderWidth:1,
        position:'absolute',top:'-5%',left:'-10%'
    }}></View>
    <View style={{
        width:250,
        height:250,
        borderRadius:250,
        borderColor:'#fff',
        borderWidth:1,
        position:'absolute',top:'10%',left:'-30%'
    }}></View> 
    <Lottie style={{position:'absolute',top:'-30%'}} source={require('../assets/star.json')} speed={1.5} loop={true} autoPlay  />
    <Text style={{fontSize:40,color:'#fff',marginBottom:10,fontFamily:'Poppins-SemiBold'}}>Quick Loan</Text>
    <Text style={{color:'#fff',width:'85%',textAlign:'left',fontSize:20,fontFamily:'Poppins-Regular'}}>You can now apply for Loan from the comfort of your homes with instant approval.</Text>
    <CircleButton 
                    stylesB={{minWidth:70,height:70,borderRadius:70,alignSelf:'center'}} 
                    onPress={()=>navigation.navigate('Login')}>
                    </CircleButton>     
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        justifyContent:'flex-end',
       
        alignItems:'flex-start',
        backgroundColor:colors.primary,
        padding:30
    },
    onboardingLogo:{
        width:350,
        height:250,
        alignSelf:'center',
    },
    continueBtn:{
      padding:20,
      alignSelf:'flex-end',
    },
    separator: {
        borderBottomColor: '#737373',
        borderBottomWidth: 20,
      },
})
import { View, Text, Image, StyleSheet, Button, Alert,Separator  } from 'react-native'
import React from 'react'
import CircleButton from '../components/CircleButton';
import colors from '../constant/colors';
import Lottie from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const Onboarding = ({navigation}) => {
    const Separator = () => (
        <View style={styles.separator} />
      );
  return (
    <LinearGradient
colors={['#6a32a1','#ce49bfad'] }
start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
style={styles.container}>
  {/* <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text> */}
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
      <Text style={{fontSize:40,color:'#fff',marginBottom:5,fontFamily:'Poppins-Regular'}}>Quick Loan</Text>
      <Text style={{color:'#fff',width:'85%',textAlign:'left',fontSize:16,fontFamily:'Poppins-Regular'}}>You can now apply for Loan from the comfort of your homes with instant approval.</Text>
        <CircleButton  title="Get Started"
          stylesB={{minWidth:180,height:45,alignSelf:'center'}} 
          onPress={()=>navigation.navigate('Login')}>
        </CircleButton>     
    </LinearGradient>
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
      linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
})
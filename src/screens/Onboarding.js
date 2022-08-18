import { View, Text, Image, StyleSheet, Button, Alert,Separator  } from 'react-native'
import React from 'react'

const Onboarding = () => {
    const Separator = () => (
        <View style={styles.separator} />
      );
  return (
    <View style={styles.container}>
        <View>
            <Image
                style={styles.onboardingLogo}
                source={require('../assets/img/onboardingImg.png')}
            />
        </View>
        <Separator />
      <Text style={{fontSize:24,color:'#fff',marginBottom:10}}>Quick Loan</Text>
      <Text style={{color:'#fff',width:'75%',textAlign:'center'}}>You can now apply for Loan from the comfort of your homes with instant approval.</Text>
        <View style={styles.continueBtn}>
            <Button
                title="Continue"
                color="#554994"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#6986b3'       
    },
    onboardingLogo:{
        width:350,
        height:250,
        alignSelf:'center',
    },
    continueBtn:{
      padding:20
    },
    separator: {
        borderBottomColor: '#737373',
        borderBottomWidth: 20,
      },
})
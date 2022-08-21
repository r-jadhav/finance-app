import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../constant/colors'
import Button from '../components/Button'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
         <View style={styles.header}>
          <Image
              style={styles.profile}
              source={require('../assets/img/logo.png')}
          />
          <View>
            <Text style={{color:'#fff'}}>Welcome to the</Text>
            <Text style={{fontSize:20,fontWeight:'700',color:'#fff'}}>Finedict</Text>
          </View>
        </View>


        <View style={{marginHorizontal:20}}>
          <Image
              style={styles.bankcards}
              source={require('../assets/img/sbi.png')}
          />
        </View>


        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.stepcard}>
            <Image
              style={styles.logo}
              source={require('../assets/img/flexible_A.png')}
          />          
            <Text style={{fontSize:15,color:'#000'}}>Flexible Amount</Text>
          </View>
          <View style={styles.stepcard}>
            <Image
              style={styles.logo}
              source={require('../assets/img/Qd-f.png')}
          />          
            <Text style={{fontSize:15,color:'#000'}}>Quick Disbursal</Text>
          </View>
          <View style={styles.stepcard}>
            <Image
              style={styles.logo}
              source={require('../assets/img/cp.png')}
          />          
            <Text style={{fontSize:15,color:'#000'}}>Convenient Process</Text>
          </View>
        </View>
          <Button style={[styles.button,{padding:'10%',width:'80%'}]} onPress={()=>navigation.navigate('Contact')} title="Apply Now"></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
      },
      header:{
        flexDirection:'row',
        backgroundColor:'#6986b3',
        width:'100%',
        borderBottomEndRadius:15,
        borderBottomLeftRadius:15,
        padding:'6%',
      },
      profile:{
        backgroundColor:'#000',
        width:45,
        height:45,
        borderWidth:1,
        borderRadius:50,
        color:'#fff',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:30,
        marginRight:10,
      },
      bankcards:{
        width:320,
        height:120,
        marginTop:20,
        borderRadius:7,
      },
      stepcard:{
        width:'30%',
        marginVertical:30,
        padding:15,
        marginHorizontal:5,
        alignSelf:'center',
        alignItems:'center',
        borderRadius:7,
        shadowColor: "#f5f5f5",
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation:2
      },
      logo:{
        width:30,
        height:30,
        marginRight:20
      },
})
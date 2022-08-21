import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import { TextInput } from 'react-native-paper';
import image from '../assets/img/app-bg.jpg'
import Button from "../components/Button";

const Otp = ({navigation}) => {
  const [text, onChangeText] = React.useState("enter number");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff'}}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.bgimg}> */}
            <View style={[styles.section_logo,{flex:3}]}>
                <Image
                    style={styles.logo}
                    source={require('../assets/img/logo.png')}
                />
                <Text style={[styles.company_name,{}]}>Finedict</Text>
            </View>


            <View style={[styles.Box,{flex:2}]}>
              <View style={{flexDirection:'column',marginTop:'15%',justifyContent:'space-between'}}>
                <Text style={styles.Heading}>Enter OTP sent to 9884098840</Text>
                {/* <TextInput
                    style={styles.input}
                    keyboardType = 'numeric'
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter 6 Digit OTP"      
                /> */}
                <TextInput
                      style={{backgroundColor:'#fff',width:'100%',alignSelf:'center',height:45,borderRadius:5,marginTop:20}}
                      keyboardType = 'numeric'
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Enter 4 Digit OTP"
                     
                    />
                <View style={styles.resend}>
                        <Text style={{color:'#fff'}}>Resend OTP</Text>
                        <Text style={{color:'#fff'}}>Edit Number</Text>
                    </View>

                <Button style={styles.button} onPress={()=>navigation.navigate('Home')} title="Submit"></Button>

              </View>
            </View>

        {/* </ImageBackground> */}
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
    bgimg: {
        flex: 1,
        justifyContent: "center"
      },
    section_logo:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      logo:{
        width:100,
        height:100
      },
      company_name:{
        fontWeight:'bold',
        fontSize:35,
        color:'#000',
      },
      registerBtn:{
        flex:1,
        height:'70%',
        width:'100%',
        padding:'10%',    
      },
    button: {
        alignItems: "center",
        backgroundColor: "#554994",
        padding: 10,
        borderRadius:5,
        fontWeight:'bold',
        height: 40,
      }, 
        Box:{
          flex:1,
          backgroundColor:'#6986b3',
          height:'50%',
          width:'100%',
          borderTopEndRadius:30,
          borderTopLeftRadius:30,
          padding:'10%',
        },
        Heading:{
          fontWeight:'bold',
          fontSize:20,
          color:'#000',
          marginBottom:10,
          color:'#fff'
        },
        input: {
          height: 20,
          borderWidth: 1,
          padding: 10,
          borderRadius:5,
          backgroundColor:'transparent',
          borderColor:'#554994',
          marginBottom:5

        },
        resend:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:20,
        }
     
})
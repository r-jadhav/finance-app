import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import { TextInput } from 'react-native-paper';
import image from '../assets/img/bg-img.jpg'
// import PhoneInput from "react-native-phone-number-input";


const LoginPage = ({navigation}) => {
  const [text, onChangeText] = React.useState("enter number");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{flex:1,flexDirection:'column'}}>
        <ImageBackground source={image} resizeMode="cover" style={styles.bgimg}>
            <View style={[styles.section_logo,{flex:2}]}>
                <Image
                    style={styles.logo}
                    source={require('../assets/img/logo-final.png')}
                />
                <Text style={[styles.company_name,{}]}>Finance</Text>
            </View>


            <View style={[styles.Box,{flex:2}]}>
              <Text style={styles.Heading}>Enter Your Mobile Number</Text>

              <View style={{flexDirection:'column',marginTop:'15%',justifyContent:'space-between'}}>
                  <TextInput
                      style={styles.input}
                      keyboardType = 'numeric'
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="+91"
                     
                    />
                  <TouchableOpacity style={styles.button}>
                      <Text style={{color:'#fff',fontSize:16}}
                      onPress={() => navigation.navigate("")}>Get OTP</Text>
                  </TouchableOpacity>
              </View>
            </View>

        </ImageBackground>
    </View>
  )
}

export default LoginPage

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
        width:80,
        height:80
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
        backgroundColor: "#000",
        padding: 10,
        width:'80%',
        borderRadius:5,
        fontWeight:'bold',
        height: 40,
        margin: 12,
      }, 
        Box:{
          flex:1,
          backgroundColor:'#54BAB9',
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
        },
        input: {
          height: 20,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width:'80%',
          borderRadius:5,
        },
     
})
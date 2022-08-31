import React, { useState } from "react";
import { TextInput,StyleSheet, Text, View, Image, TouchableOpacity, Pressable, ImageBackground } from 'react-native'

import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import colors from "../constant/colors";

const Otp = ({navigation}) => {
  const [text, onChangeText] = React.useState("enter number");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff'}}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.bgimg}> */}
            <View style={[styles.section_logo,{flex:3}]}>
                <Image
                    style={styles.logo}
                    source={require('../assets/img/finedict-logo.png')}
                />
              
            </View>


            <View style={[styles.Box,{flex:2.5}]}>
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
                      style={{backgroundColor:'#fff',
                      width:'100%',
                      alignSelf:'center',
                      height:55,
                      borderRadius:25,
                      marginVertical:20,paddingLeft:15,fontFamily:'Poppins-Regular',color:'#aaa',fontSize:16}}
                      keyboardType = 'numeric'
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Enter 4 Digit OTP"
                     
                    />
                <View style={styles.resend}>
                        <Text style={{color:'#fff',fontFamily:'Poppins-Medium',fontSize:16}}>Resend OTP</Text>
                        <Text style={{color:'#fff',fontFamily:'Poppins-Medium',fontSize:16}}>Edit Number</Text>
                    </View>

                  
                    <CircleButton title="Get Started" onPress={()=>navigation.navigate('Home')}></CircleButton>

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
        width:300,
        height:150,
        resizeMode:'contain'
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
          backgroundColor:colors.primary,
          height:'50%',
          width:'100%',
          borderTopEndRadius:60,
          borderTopLeftRadius:60,
          padding:'10%',
        },
        Heading:{
          fontSize:18,
          color:'#000',
          marginBottom:10,
          color:'#fff',
          fontFamily:'Poppins-Medium'
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
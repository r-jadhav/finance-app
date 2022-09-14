import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState,useContext } from "react";
import { TextInput,StyleSheet, Text, View, Image, TouchableOpacity, Pressable, ImageBackground, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import colors from "../constant/colors";
import i18n from '../i18n'
import AuthContext from "../navigation/Auth";

const Otp = ({route,navigation}) => {
  const [text, onChangeText] = React.useState("enter number");
  const [enterOtp, setenterOtp] = React.useState(null);
  const {number,otp} = route.params;
  const { signIn } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

const editnumber = () =>{
  navigation.goBack()
}
const checkOtp = () =>{
  if(parseInt(enterOtp) == otp){
    setLoading(true)
    axios
    .post('https://finedict.com:3003/addUser'
    , {
      phone:number
    })
    .then(async(response) => {
      console.log(response.data)
      if(response.status == 200){
        Alert.alert('','Login Success')
        signIn('124')
        await AsyncStorage.setItem('USER_TOKEN',number)
      }else{
        Alert.alert('','Could not process your request now. Try again later.')
      }
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{
      setLoading(false)
    });
  }else{
    Alert.alert('','Kindly enter valid otp')
  }
  
}
const resendOtp = () =>{
  setLoading(true)
  axios
      .post('https://finedict.com:3003/sendSms'
      , {
        number:number,
        otp:otp
      })
      .then(async(response) => {
        
        if(response.data.Status == 'Success'){
         Alert.alert('','Otp sent successfully')
        }
      }).catch(err=>{
        console.log(err)
      }).finally(()=>{
        setLoading(false)
      });
}
  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff'}}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.bgimg}> */}
            <View style={[styles.section_logo,{flex:3}]}>
                <Image
                    style={styles.logo}
                    source={require('../assets/img/finedict-logo.png')}
                />
              
            </View>
            <View style={[styles.container,{flex:3}]}>
            <LinearGradient
                colors={['#6a32a1','#ce49bfad'] }
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                style={styles.Box}>

              <View style={{flexDirection:'column',marginTop:'10%',justifyContent:'space-between'}}>
                <Text style={styles.Heading}>{i18n.t('Enter_OTP_sent_to')} {number}</Text>
                <TextInput
                      style={{backgroundColor:'#fff',
                      width:'100%',
                      height:45,
                      borderRadius:5,
                      marginTop:20,marginBottom:5,paddingLeft:15,fontFamily:'Poppins-Regular',color:'#aaa',fontSize:16}}
                      keyboardType = 'numeric'
                      onChangeText={setenterOtp}
                   
                      placeholder={i18n.t('Enter_4_Digit_OTP')}
                     
                    />
                <View style={styles.resend}>
                  <TouchableOpacity onPress={()=>{
                    resendOtp()
                  }}>
 <Text style={{color:'#fff',fontFamily:'Poppins-Medium',fontSize:16}}>{i18n.t('Resend_OTP')}</Text>
                  </TouchableOpacity>
                       
                        <TouchableOpacity onPress={()=>{editnumber()}}>
                        <Text style={{color:'#fff',fontFamily:'Poppins-Medium',fontSize:16}}>{i18n.t('Edit_Number')}</Text>
                          </TouchableOpacity>
                    </View>

                    <CircleButton loading={loading} title={i18n.t('Submit')}
                    stylesB={{minWidth:'100%',height:45,}} 
                    onPress={()=>{checkOtp()}}>
                  </CircleButton> 

              </View>

              </LinearGradient>

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
          borderTopRightRadius:60,
          borderTopLeftRadius:60,
          padding:'10%',
        },
        Heading:{
          fontSize:18,
          color:'#000',
          // marginBottom:10,
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
            // marginBottom:20,
        }
     
})
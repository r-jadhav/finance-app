import React, { useState,useEffect,useContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, PreButtonssable, ImageBackground,Alert } from 'react-native'
import Button from "../components/Button";
import colors from '../constant/colors'
import CircleButton from '../components/CircleButton';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../i18n'
import axios from "axios"
import AuthContext from "../navigation/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const LoginPage = ({navigation}) => {
  const [text, onChangeText] = React.useState("enter number");
  const [phone, setPhone] = React.useState(null);
  const [otp, setOtp] = useState('')
  const { signIn } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    
    setOtp(Math.floor(1000 + Math.random() * 9000));
    
  }, [])
  
  const Login = () => {
    if(phone.length == 10){
      setLoading(true)
      axios
      .post('https://finedict.com:3003/sendSms'
      , {
        number:phone,
        otp:otp
      })
      .then(async(response) => {
        
        if(response.data.Status == 'Success'){
          navigation.navigate('Otp',{number:phone,otp:otp})
        }else{
          console.log()
          if(response.data.msg == 'Login Success'){
            signIn('124')
            await AsyncStorage.setItem('USER_TOKEN',phone)
          }else{
            Alert.alert('','Could not process your request now. Try again later.')
          }
          
        }
      }).catch(err=>{
        console.log(err)
      }).finally(()=>{
        setLoading(false)
      });
    }else{
      Alert.alert('','Please enter valid phone number')
    }
   

  }
  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff'}}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.bgimg}> */}
            <View style={[styles.section_logo,{flex:3}]}>
                <Image
                resizeMode="contain"
                    style={styles.logo}
                    source={require('../assets/img/finedict-logo.png')}
                />
            </View>

            <View style={[styles.container,{flex:2.5}]}>

            <LinearGradient
                colors={['#6a32a1','#ce49bfad'] }
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                style={styles.Box}>

              <View style={{flexDirection:'column',marginTop:'10%',justifyContent:'space-between'}}>
                <Text style={styles.Heading}>{i18n.t('Enter_Your_Mobile_Number')}</Text>
                <View style={{backgroundColor:'#fff',
                      width:'100%',
                      alignSelf:'center',
                      height:45,
                      borderRadius:5,
                      marginTop:20,flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                    <Text style={{fontFamily:'Poppins-Regular',color:'#aaa',fontSize:16}}>+91</Text>
                    <Text style={{fontFamily:'Poppins-Regular',color:'#aaa',fontSize:25,paddingLeft:10,fontWeight:'400'}}>|</Text>
                    <TextInput
                      keyboardType = 'numeric'
                      onChangeText={setPhone}
                      maxLength={10}
                      style={{width:'100%',marginLeft:10,fontFamily:'Poppins-Regular',color:'#aaa',fontSize:16,alignItems:'center'}}
                    />
                </View>
                <CircleButton  loading={loading} title={i18n.t('Get_OTP')}
                  stylesB={{minWidth:'100%',height:45}} 
                  onPress={()=>{
                    Login()
                  }}>
                </CircleButton>  
                    {/* <CircleButton title="Get Started" stylesB={{minWidth:70,height:70,borderRadius:70,alignSelf:'center'}} onPress={()=>navigation.navigate('Otp')}></CircleButton> */}
              </View>

            </LinearGradient>
            </View>
      
        {/* </ImageBackground> */}
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
          marginBottom:20

        },
     
})
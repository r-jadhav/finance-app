import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity,Platform ,Alert } from 'react-native'
import React from 'react'
// import WebView from 'react-native-webview'
import colors from '../constant/colors'
import EvilIcons from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../i18n'

const Privacy = ({navigation}) => {
  return (
    // <View style={{flex:1}}>
    //   <WebView source={{uri:'https://finedict.com/#/privacy-policy'}}></WebView>
    // </View>

    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
                colors={['#6a32a1','#ce49bfad'] }
                start={{x: 0.3, y: 0.25}} end={{x: 0.5, y: 1.0}}
                style={[styles.header,{backgroundColor:colors.primary,borderBottomRightRadius: 35,
                  borderBottomLeftRadius: 35,}]}>
                  
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <EvilIcons color="#fff" size={30} name='arrowleft'></EvilIcons>
              </TouchableOpacity> 
            <Text style={{textAlign:'center',fontSize:25,color:'#fff',
            fontFamily:'Poppins-SemiBold'}}>{i18n.t('Privacy_Policy')}</Text>
            <Text></Text>
        </LinearGradient>
        <View style={styles.contactForm}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy')}</Text>

        <View style={{marginVertical:20}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_head')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_dec')}</Text>
        </View>

        <View style={{}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_Consent')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_Consent_des')}</Text>
        </View>

        <View style={{}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_Log_Files')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_Log_Files_des')}</Text>
        </View>
        <View style={{}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_Advertising')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_Advertising_des')}</Text>
        </View>
        <View style={{}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_Third_Party')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_Third_Party_des')}</Text>
        </View>
        <View style={{}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_Controllers')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_Controllers_des')}</Text>
        </View>
        <View style={{}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_information')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_information_des')}</Text>
        </View>
        <View style={{}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_Disclosure')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_Disclosure_des')}</Text>
        </View>
        <View style={{}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_Websites')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_Websites_des')}</Text>
        </View>
        <View style={{}}>
          <Text style={{marginTop:20,color:'#2d2e2e',fontSize:16,}}>{i18n.t('Privacy_Policy_Changes')}</Text>
          <Text style={{color:'#2d2e2e'}}>{i18n.t('Privacy_Policy_Changes_des')}</Text>
        </View>
       
    </View>

  </ScrollView>
   
  </View>

  )
}

export default Privacy

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#f5f5f5'
    },
    header:{
      flex:2,
      width:'100%',
      borderBottomEndRadius:35,
      borderBottomLeftRadius:35,
      padding:'8%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    contactForm:{
        paddingHorizontal:15,
        marginBottom:20,
    },
    listItem:{
      height:60,
      borderBottomWidth:0.5,
      borderColor:'#ccc',
      flexDirection:'row',
      alignItems:'center'
    },
    listText:{
      fontFamily:'Poppins-Regular',
      color:'#000',
      fontSize:18,
      marginLeft:20
    }
  
})
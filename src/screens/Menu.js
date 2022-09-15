import React,{useContext,useState} from 'react'
import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity,Platform ,Alert } from 'react-native'
import FTextInput from '../components/FTextInput'
import  Button  from '../components/Button';
import colors from '../constant/colors'
import EvilIcons from 'react-native-vector-icons/AntDesign'
import MI from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../i18n'
import Share from 'react-native-share'
import InAppReview from 'react-native-in-app-review';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../navigation/Auth'
const Menu = ({navigation}) => {
  const { signOut } = useContext(AuthContext)
  const [phone, setNumber] = useState('')
  React.useEffect(async() => {
    setNumber(await AsyncStorage.getItem('USER_TOKEN'))
    
  }, [])
  
    const iconSize = 30
    const colorIcon = colors.primary
    const onShare = async () => {
      var link = '';
      if(Platform.OS == 'ios'){
        link = 'https://play.google.com/store/apps/details?id=com.finedict.app&hl=en';
      }else{
        link = 'https://play.google.com/store/apps/details?id=com.finedict.app&hl=en'
      }
      try {
        const result = await Share.open({
         title: 'App link',
          message: 'Please install this app from store \n', 
          url: link
              });
              if (result.action === Share.sharedAction) {
                if (result.activityType) {
                  // shared with activity type of result.activityType
                } else {
                  // shared
                }
              } else if (result.action === Share.dismissedAction) {
                
              }
            } catch (error) {
            }
    };
    const RateNow = async() =>{
      if(InAppReview.isAvailable() == false){
        Alert.alert('','Unavailable')
      }else{
        InAppReview.RequestInAppReview()
        .then((hasFlowFinishedSuccessfully) => {
          if (hasFlowFinishedSuccessfully) {
            Alert.alert('','Thanks for Rating app')
          }
        })
        .catch((error) => {
          Alert.alert('','Unavailable')
          console.log(error);
        }); 
      }
     
    }
    const LogOut = async() =>{
      await AsyncStorage.clear()
      signOut()
    }
  return (
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
          fontFamily:'Poppins-SemiBold'}}>{i18n.t('Menu')}</Text>
          <Text></Text>
        </LinearGradient>
        <View style={styles.contactForm}>
           <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
             <Image style={{width:80,height:80}} source={require('../assets/img/user.png')}></Image>
            <View style={{marginLeft:20}}>
                <Text style={{fontFamily:'Poppins-Medium',color:'#000',fontSize:22}}>Phone Number</Text>
                <Text style={{fontFamily:'Poppins-Regular',color:colors.primary,fontSize:18}}>+91 {phone}</Text>
            </View>
           </View>
            <TouchableOpacity onPress={()=>{RateNow()}} style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='star'></MI>
                <Text style={styles.listText}>{i18n.t('Rate_Our_App')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onShare()}} style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='share'></MI>
                <Text style={styles.listText}>{i18n.t('Share_Our_App')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('about')} style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='info'></MI>
                <Text style={styles.listText}>{i18n.t('About_Us')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('FeedBack')} style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='info'></MI>
                <Text style={styles.listText}>{i18n.t('FeedBack')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('privacy',{url:'https://finedict.com/#/privacy-policy'})} style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='security'></MI>
                <Text style={styles.listText}>{i18n.t('Privacy_Policy')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('privacy',{url:'https://finedict.com/#/terms'})} style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='list-alt'></MI>
                <Text style={styles.listText}>{i18n.t('Terms_Condition')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{LogOut()}} style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='logout'></MI>
                <Text style={styles.listText}>{i18n.t('Log_out')}</Text>
            </TouchableOpacity>
        </View>

      </ScrollView>
     
    </View>
  )
}

export default Menu

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
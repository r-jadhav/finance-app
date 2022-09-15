import { View, Text, Image, StyleSheet, Button, Alert,Separator,TouchableOpacity,Modal  } from 'react-native'
import React from 'react'
import CircleButton from '../components/CircleButton';
import colors from '../constant/colors';
import Lottie from 'lottie-react-native';
import { RadioButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../i18n'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ANT from 'react-native-vector-icons/AntDesign';

const Onboarding = ({navigation}) => {
    const [checked, setChecked] = React.useState('en');
  const [visible, setvisible] = React.useState(false);

  React.useEffect(() => {
    checkLanguage()
  
   
  }, [])
  
  const checkLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem('@lang');
      if (value !== null) {
        i18n.changeLanguage(value);
        // value previously stored
      }
    } catch (e) {
      await AsyncStorage.setItem('@lang', 'en');
      i18n.changeLanguage('en');
      // error reading value
    }
  };
    const Separator = () => (
        <View style={styles.separator} />
      );
      const setLanguageInStorage = async lang => {
        await AsyncStorage.setItem('@lang', lang);
        
      };
  return (
    <LinearGradient
colors={['#6a32a1','#ce49bfad'] }
start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
style={styles.container}>
  {/* <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text> */}
        <Text style={{color:'#fff',fontSize:30,textAlign:'center'}}>Select Language</Text>

        <View style={{alignSelf:'center', backgroundColor:'#fff',width:'80%',padding:20,padding:20,borderRadius:5,marginTop:20}}>
          <RadioButton.Group onValueChange={newValue => {
            i18n.changeLanguage(newValue);
            setLanguageInStorage(newValue);
            setChecked(newValue);
          }} value={checked}>
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            
            <RadioButton value="en" />
            <Text style={{color:'#222',fontSize:20}}>English</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <RadioButton value="hi" />
            <Text style={{color:'#222',fontSize:20}}>हिन्दी</Text>
          </View>
          </RadioButton.Group>
        </View>
        <CircleButton  title={i18n.t('Get_Started')}
          stylesB={{minWidth:180,height:45,alignSelf:'center'}} 
          onPress={()=>navigation.navigate('Intro')}>
        </CircleButton>
    </LinearGradient>
  )
}

export default Onboarding

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        justifyContent:'center',
        // alignItems:'flex-start',
        backgroundColor:colors.primary,
        padding:30,  
    },
      linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
    
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      langRow: {
        flexDirection: 'row',
        height: 80,
        borderBottomWidth: 1,
        alignItems: 'center',
        borderBottomColor: '#ddd',
      },
})
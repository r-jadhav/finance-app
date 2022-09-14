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
  <View style={{flex:1}}>
  <Lottie style={{position:'absolute',top:'-30%'}} source={require('../assets/star.json')} speed={1.5} loop={true} autoPlay  />
  </View>
  <View style={{flex:3}}>
        <Text style={{color:'#fff',fontSize:30}}>Select Language</Text>
      <TouchableOpacity onPress={()=>{
          setvisible(true)
        }}>
            {/* <CircleButton  title={i18n.t('Change_Language')}
          stylesB={{minWidth:180,height:45,alignSelf:'center'}} 
          onPress={()=>{setvisible(true)}}>
            </CircleButton> */}


        <View>
            <RadioButton
                    value="en"
                    status={ checked === 'en' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        i18n.changeLanguage('en');
                        setLanguageInStorage('en');
                        setChecked('en');
                    }}
                />
            <Text style={{fontSize:20,color:'#fff'}}
            onPress={() => {
                i18n.changeLanguage('en');
                setLanguageInStorage('en');
                setChecked('en');
            }}>English</Text>
            
        </View>

        <View style={{display:'flex'}}>
            <RadioButton
                    value="hi"
                    status={ checked === 'hi' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        i18n.changeLanguage('hi');
                        setLanguageInStorage('hi');
                        setChecked('hi');
                    }}
                />
            <Text style={{fontSize:20,color:'#fff'}} onPress={() => {
                    i18n.changeLanguage('hi');
                    setLanguageInStorage('hi');
                    setChecked('hi');
                }}>हिन्दी</Text>

            
        </View>


          {/* <Text style={{color:'#fff',fontSize:18,textDecorationLine:'underline'}}>Change language</Text> */}
        </TouchableOpacity>
     
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <CircleButton  title={i18n.t('Get_Started')}
          stylesB={{minWidth:180,height:45,alignSelf:'center'}} 
          onPress={()=>navigation.navigate('Intro')}>
        </CircleButton>
       
        </View>
</View>
     
      
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            setvisible(!visible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 20, color: '#221f5f', fontWeight: 'bold'}}>
                  Change Language
                </Text>
                <ANT
                  onPress={() => {
                    setvisible(false);
                  }}
                  name="close"
                  size={25}></ANT>
              </View>
              <TouchableOpacity
                onPress={() => {
                  i18n.changeLanguage('en');
                  setLanguageInStorage('en');
                  setvisible(false);
                }}
                style={styles.langRow}>
                <Text style={{fontSize: 20, color: '#000'}}>English</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  i18n.changeLanguage('hi');
                  setLanguageInStorage('hi');
                  setvisible(false);
                }}
                style={styles.langRow}>
                <Text style={{fontSize: 20, color: '#000'}}>हिन्दी</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>     
    </LinearGradient>
  )
}

export default Onboarding

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-start',
        backgroundColor:colors.primary,
        padding:30
    },
    onboardingLogo:{
        width:350,
        height:250,
        alignSelf:'center',
    },
    continueBtn:{
      padding:20,
      alignSelf:'flex-end',
    },
    separator: {
        borderBottomColor: '#737373',
        borderBottomWidth: 20,
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
import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,SafeAreaView, Alert  } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import  Button  from '../components/Button';
import colors from '../constant/colors'
import EvilIcons from 'react-native-vector-icons/AntDesign'
import axios from "axios"
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from './CustomInput'
import i18n from '../i18n';


const signUpValidationSchema = yup.object().shape({

    email: yup
    .string()
    .required(i18n.t('Email_is_required')),
    address: yup
    .string()
    .required(i18n.t('Message_is_required'))
})
const App = ({navigation}) => {
  const [loader, setLaoder] = useState(false)
  const createPost = (values)=> {
    setLaoder(true)
    console.log(values)
    axios
    .post('https://finedict.com:3003/addFeedback'
    , {
      f_email:values.email,
      f_msg:values.address
    })
    .then((response) => {
      if(response.status == 200){
        Alert.alert('','Thank you for contacting us. we will reach out soon.')
       
      navigation.goBack()

      }else{
        Alert.alert('','Could not process your request now. Try again later.')

        navigation.goBack()
      }
      
      
    });

  }

  return (
    <>
      
      <SafeAreaView style={styles.container}>
      <LinearGradient
              colors={['#6a32a1','#ce49bfad'] }
              start={{x: 0.3, y: 0.25}} end={{x: 0.5, y: 1.0}}
               style={[styles.header,{backgroundColor:colors.primary,borderBottomRightRadius: 35,
                borderBottomLeftRadius: 35,}]}>

            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <EvilIcons color="#fff" size={30} name='arrowleft'></EvilIcons>
            </TouchableOpacity> 
            <Text style={{textAlign:'center',fontSize:25,color:'#fff',
          fontFamily:'Poppins-SemiBold'}}>{i18n.t('FeedBack')}</Text>
          <Text></Text> 
        </LinearGradient>
        <View style={styles.contactForm}>
        <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{

              email: '',
 
              address: '',

            }}
            onSubmit={values => createPost(values)}
          >
            {({ handleSubmit, isValid, values }) => (
              <>
             
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder={i18n.t('Email')}
                />
                
          
                <Field
                  component={CustomInput}
                  name="address"
                  placeholder={i18n.t('Message')}
                  
                />
              
                {loader == true ? (<ActivityIndicator size="large" color={colors.primary}></ActivityIndicator>) :  (<Button 
                style={{marginTop:30}}
                  onPress={handleSubmit}
                  title={i18n.t('SUBMIT')}
                  
                  disabled={!isValid || values.email === ''}
                />)}
                
              </>
            )}
          </Formik>
            
        </View>

  
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'#f5f5f5'
  },
  header:{
    flex:0.2,
    width:'100%',
    borderBottomEndRadius:35,
    borderBottomLeftRadius:35,
    padding:'8%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  contactForm:{
      paddingHorizontal:30,
      marginBottom:20,
  }
 
})

export default App

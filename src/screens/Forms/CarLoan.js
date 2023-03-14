import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,SafeAreaView, Alert, ScrollView  } from 'react-native'
import ION from 'react-native-vector-icons/Ionicons'
import Button from '../../components/Button'
import colors from '../../constant/colors'
import EvilIcons from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import axios from "axios"
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from '../CustomInput'
import CustomRadio from '../CustomRadio'
import i18n from '../../i18n'
import FormModal from '../../components/FormsModal'
import FormHeader from '../../components/FormHeader'

const signUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required(i18n.t('Full_name_is_required')),
    contact: yup
    .string()
    .required(i18n.t('Phone_number_is_required')), 
    email: yup
    .string()
    .required(i18n.t('Email_is_required')),
    salary: yup
    .string()
    .required(i18n.t('Salary_is_required')),
    address: yup
    .string()
    .required(i18n.t('Address_is_required'))
})
const CarLoan = ({navigation}) => {

  const [modalLogin, setModalLogin] = React.useState(false);
  const [loader, setLaoder] = useState(false)
  const createPost = (values)=> {
    setLaoder(true)
    console.log(values)
    axios
    .post('https://finedict.com:3003/addEnquiry'
    , {
      enq_email:values.email,
      enq_name:values.name,
      enq_contact_number:values.contact,
      enq_monthly_salary:values.salary,
      enq_location:values.address,
      enq_loan_amt:values.loanamt,
      created_date_time:new Date(),
    })
    .then((response) => {
      if(response.status == 200){
        Alert.alert('',i18n.t('thanks'))
       
      navigation.goBack()

      }else{
        Alert.alert('',i18n.t('error'))

        navigation.goBack()
      }
      
      
    });

  }

  return (
    <>
      
      <View style={{flex:1,backgroundColor:'#fff',}}>

    <LinearGradient
        colors={['#6a32a1','#ce49bfad'] }
        start={{x: 0.3, y: 0.25}} end={{x: 0.5, y: 1.0}}
        style={styles.linearGradient}>
          <View style={[styles.header]}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <EvilIcons color="#fff" size={30} name='arrowleft'></EvilIcons>
            </TouchableOpacity>
          <Text style={{textAlign:'center',fontSize:20,color:'#fff',
          fontFamily:'Poppins-SemiBold'}}>{i18n.t('Car_Loan')}</Text>
           <TouchableOpacity onPress={()=>{setModalLogin(true)}}>
                <ION name="menu" color="#fff" size={30} ></ION>
            </TouchableOpacity>
            
        </View>

    </LinearGradient>

        {/* <FormHeader/> */}
        

        <ScrollView>
            <View style={styles.contactForm}>
            <Formik
                validationSchema={signUpValidationSchema}
                initialValues={{
                  name: '',
                  email: '',
                  contact: '',
                  salary: '',
                  address: '',
                  loanamt:''
                }}
                onSubmit={values => createPost(values)}
              >
                {({ handleSubmit, isValid, values }) => (
                  <>
                  <Field
                      component={CustomInput}
                      name="name"
                      placeholder={i18n.t('Name')}
                    />
                    <Field
                      component={CustomInput}
                      name="contact"
                      placeholder={i18n.t('Contact_Number')}
                      keyboardType="numeric"
                    />
                    <Field
                      component={CustomInput}
                      name="email"
                      placeholder={i18n.t('Email')}
                    />
                  <Field
                      component={CustomRadio}
                      name="Income"
                      title = "Income"
                      first_name="Salary"
                      second_name = "Business"
                      third_name = "Agriculture"
                      // placeholder={i18n.t('Monthly_Salary')}
                    />

                    <Field
                      component={CustomRadio}
                      name="Loan Type"
                      title = "Loan Type"
                      first_name="New Car"
                      second_name = "Used Car"
                      // placeholder={i18n.t('Monthly_Salary')}
                    />

                    <Field
                      component={CustomInput}
                      name="address"
                      placeholder={i18n.t('Address')}
                      
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
        </ScrollView>
        <FormModal modalLogin={modalLogin} setModalLogin={setModalLogin} navigation={navigation}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'#f5f5f5'
  },
  linearGradient: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor:colors.primary,
  },
  header:{
    width:'100%',
    borderBottomEndRadius:15,
    borderBottomLeftRadius:15,
    padding:'6%',
    flexDirection:'row',
    // padding:'8%',
    justifyContent:'space-between',
    alignItems:'center'
  },
  contactForm:{
      paddingHorizontal:30,
      marginBottom:20,
  }
 
})

export default CarLoan
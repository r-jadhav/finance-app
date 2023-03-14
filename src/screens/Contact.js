import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,SafeAreaView, Alert  } from 'react-native'
import ION from 'react-native-vector-icons/Ionicons'
import  Button  from '../components/Button';
import colors from '../constant/colors'
import EvilIcons from 'react-native-vector-icons/AntDesign'
import axios from "axios"
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from './CustomInput'
import i18n from '../i18n';
import FormModal from '../components/FormsModal';


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
const App = ({navigation}) => {

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
      
      <SafeAreaView style={styles.container}>
          <View style={[styles.header,{backgroundColor:colors.primary}]}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <EvilIcons color="#fff" size={30} name='arrowleft'></EvilIcons>
            </TouchableOpacity>
          <Text style={{textAlign:'center',fontSize:25,color:'#fff',
          fontFamily:'Poppins-SemiBold'}}>{i18n.t('Home Loan')}</Text>
           <TouchableOpacity onPress={()=>{setModalLogin(true)}}>
                <ION name="menu" color="#fff" size={30} ></ION>
            </TouchableOpacity>
            
        </View>
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
                  name="email"
                  placeholder={i18n.t('Email')}
                />
                
                <Field
                  component={CustomInput}
                  name="contact"
                  placeholder={i18n.t('Contact_Number')}
                  keyboardType="numeric"
                />
                <Field
                  component={CustomInput}
                  name="salary"
                  placeholder={i18n.t('Monthly_Salary')}
                  
                />
                <Field
                  component={CustomInput}
                  name="address"
                  placeholder={i18n.t('Address')}
                  
                />
              <Field
                  component={CustomInput}
                  name="loanamt"
                  placeholder={i18n.t('Require_Loan_Amount')}
                  
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

        <FormModal modalLogin={modalLogin} setModalLogin={setModalLogin} navigation={navigation}/>

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
    borderBottomEndRadius:15,
    borderBottomLeftRadius:15,
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
// import React,{useState} from 'react'
// import { StyleSheet, Text, View, TouchableOpacity,ScrollView  } from 'react-native'
// import FTextInput from '../components/FTextInput'
// import  Button  from '../components/Button';
// import colors from '../constant/colors'
// import EvilIcons from 'react-native-vector-icons/AntDesign'
// import axios from "axios"
// import { Formik } from 'formik';

// const Contact = ({navigation}) => {
//   const [email, setEmail] = useState('')
//   const [principal, setprincipal] = useState('')
//   const [contact, setContact] = useState('')
//   const [salary, setSalary] = useState('')
//   const [address, setAddress] = useState('')
//   const [loan, setLoan] = useState('')
//   const addRequest = () =>{
//     const d = new Date();

//     axios({
//       method: 'post',
//       url: 'http://68.183.139.53:3000/addEnquiry',
//       responseType: 'json',
//       data:{
//         "enq_email":email,
//         "enq_name":"tset",
//         "enq_contact_number":contact,
//         "enq_monthly_salary":salary,
//         "enq_location":address,
//         "enq_loan_amt":loan,
//         "enq_principal":principal,
//         "created_date_time":d
//     }
//     })
//       .then(function (response) {
//        console.log(response.data)
//       });
//   }
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//       <View style={[styles.header,{backgroundColor:colors.primary}]}>
//             <TouchableOpacity onPress={()=>navigation.goBack()}>
//                 <EvilIcons color="#fff" size={30} name='arrowleft'></EvilIcons>
//             </TouchableOpacity>
//           <Text style={{textAlign:'center',fontSize:25,color:'#fff',
//           fontFamily:'Poppins-SemiBold'}}>Contact</Text>
//           <Text></Text>
//         </View>
//         <View style={styles.contactForm}>
//             <FTextInput onchange={setEmail} placeholder="Email" ></FTextInput>
//             <FTextInput onchange={setprincipal} placeholder="Principal amount" ></FTextInput>
//             <FTextInput onchange={setContact} placeholder="Contact Number" ></FTextInput>
//             <FTextInput onchange={setSalary} placeholder="Monthly Salary" ></FTextInput>
//             <FTextInput onchange={setAddress} placeholder="Address" ></FTextInput>
//             <FTextInput onchange={setLoan} placeholder="Require Loan Amount" ></FTextInput>
//             <Button onPress={()=>{
//               addRequest()
//             }} title="Submit"  style={{marginTop:40}}></Button>
//         </View>

//       </ScrollView>
     
//     </View>
//   )
// }

// export default Contact

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'#f5f5f5'
//   },
//   header:{
//     flex:2,
//     width:'100%',
//     borderBottomEndRadius:15,
//     borderBottomLeftRadius:15,
//     padding:'8%',
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center'
//   },
//   contactForm:{
//       paddingHorizontal:30,
//       marginBottom:20,
//   }

// })


import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ScrollView,SafeAreaView  } from 'react-native'
import FTextInput from '../components/FTextInput'
import  Button  from '../components/Button';
import colors from '../constant/colors'
import EvilIcons from 'react-native-vector-icons/AntDesign'
import axios from "axios"
import { Formik, Field } from 'formik'
import * as yup from 'yup'

import CustomInput from './CustomInput'


const signUpValidationSchema = yup.object().shape({
  principal: yup
    .string()
    .required('Full name is required'),
    contact: yup
    .string()
    .required('Phone number is required'),
    email: yup
    .string()
    .required('Email is required'),
    salary: yup
    .string()
    .required('Email is required'),
    address: yup
    .string()
    .required('Email is required')
})
const App = () => {
  return (
    <>
      
      <SafeAreaView style={styles.container}>
       
        

          
          <View style={[styles.header,{backgroundColor:colors.primary}]}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <EvilIcons color="#fff" size={30} name='arrowleft'></EvilIcons>
            </TouchableOpacity>
          <Text style={{textAlign:'center',fontSize:25,color:'#fff',
          fontFamily:'Poppins-SemiBold'}}>Contact</Text>
          <Text></Text>
        </View>
        <View style={styles.contactForm}>
        <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              principal: '',
              email: '',
              contact: '',
              salary: '',
              address: '',
              loanamt:''
            }}
            onSubmit={values => console.log(values)}
          >
            {({ handleSubmit, isValid, values }) => (
              <>
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder="Email"
                />
                <Field
                  component={CustomInput}
                  name="principal"
                  placeholder="Principal amount"
                />
                <Field
                  component={CustomInput}
                  name="contact"
                  placeholder="Contact Number"
                  keyboardType="numeric"
                />
                <Field
                  component={CustomInput}
                  name="salary"
                  placeholder="Monthly Salary"
                  
                />
                <Field
                  component={CustomInput}
                  name="address"
                  placeholder="Address"
                  
                />
              <Field
                  component={CustomInput}
                  name="loanamt"
                  placeholder="Require Loan Amount"
                  
                />

                <Button 
                style={{marginTop:30}}
                  onPress={handleSubmit}
                  title="SUBMIT"
                  disabled={!isValid || values.email === ''}
                />
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


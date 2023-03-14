import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Alert, ScrollView,SafeAreaView } from 'react-native';
import ION from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import colors from '../../constant/colors';
import EvilIcons from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../CustomInput';
import CustomRadio from '../CustomRadio';
import i18n from '../../i18n';
import FormModal from '../../components/FormsModal';

const signUpValidationSchema = yup.object().shape({
  sec_bus_loan_name: yup.string().required(i18n.t('Full_name_is_required')),
  sec_bus_loan_phone: yup.string().required(i18n.t('Phone_number_is_required')),
  sec_bus_loan_email: yup.string().required(i18n.t('Email_is_required')),
  // sec_bus_loan_Income: yup.string().required(i18n.t('Salary_is_required')),
  // sec_bus_loan_business_name: yup.string().required(i18n.t('Salary_is_required')),
  sec_bus_loan_address: yup.string().required(i18n.t('Address_is_required')),
});
const SecuredBusinessLoan = ({navigation}) => {
  const [modalLogin, setModalLogin] = React.useState(false);
  const [loader, setLaoder] = useState(false);
  const [salary, setSalary] = useState('');
  const [businessName, setBusinessname] = useState('');

  const createPost = values => {
    setLaoder(true);
    console.log(values)
    axios
    .post('http://finedict.com:3000/LoanEnquiryService', {
        sec_bus_loan_name: values.sec_bus_loan_name,  
        sec_bus_loan_email: values.sec_bus_loan_email,
        sec_bus_loan_phone: values.sec_bus_loan_phone,
        sec_bus_loan_Income :salary ,
        sec_bus_loan_business_name : businessName,
        sec_bus_loan_address: values.sec_bus_loan_address,
        created_date_time: new Date(),
        type: 'securedBusinessLoan'
      })
      .then(response => {
        if (response.status == 200) {
          Alert.alert('', i18n.t('thanks'));

          navigation.goBack();
        } else {
          Alert.alert('', i18n.t('error'));

          navigation.goBack();
        }
      });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={[styles.header, {backgroundColor: colors.primary}]}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <EvilIcons color="#fff" size={30} name="arrowleft"></EvilIcons>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: '#fff',
              fontFamily: 'Poppins-SemiBold',
            }}>
            {i18n.t('Secured_Business_Loan')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setModalLogin(true);
            }}>
            <ION name="menu" color="#fff" size={30}></ION>
          </TouchableOpacity>
        </View>
        {/* <FormHeader/> */}

        <ScrollView>
          <View style={styles.contactForm}>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                sec_bus_loan_name: '',
                sec_bus_loan_email: '',
                sec_bus_loan_phone: '',
                sec_bus_loan_Income:salary ,
                sec_bus_loan_business_name: businessName,
                sec_bus_loan_address: '',
                type:'securedBusinessLoan',
              }}
              onSubmit={values => createPost(values)}>
              {({handleSubmit, isValid, values}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="sec_bus_loan_name"
                    placeholder={i18n.t('Name')}
                  />

                  <Field
                    component={CustomInput}
                    name="sec_bus_loan_phone"
                    placeholder={i18n.t('Contact_Number')}
                    keyboardType="numeric"
                  />

                  <Field
                    component={CustomInput}
                    name="sec_bus_loan_email"
                    placeholder={i18n.t('Email')}
                  />

                  <Field
                    component={CustomRadio}
                    name="sec_bus_loan_Income"
                    title="Income"
                    first_name="Salary"
                    second_name="Business"
                    salaryName= "sec_bus_loan_Income"
                    businessName= "sec_bus_loan_business_name"
                    setBusinessname={setBusinessname}
                    setSalary={setSalary}
                    value1="first"
                    value2="second"
                  />
                  
                  <Field
                    component={CustomInput}
                    name="sec_bus_loan_address"
                    placeholder={i18n.t('Address')}
                  />

                  {loader == true ? (
                    <ActivityIndicator
                      size="large"
                      color={colors.primary}></ActivityIndicator>
                  ) : (
                    <Button
                      style={{marginTop: 30}}
                      onPress={handleSubmit}
                      title={i18n.t('SUBMIT')}
                      disabled={!isValid || values.email === ''}
                    />
                  )}
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
        <FormModal
          modalLogin={modalLogin}
          setModalLogin={setModalLogin}
          navigation={navigation}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    padding: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactForm: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});

export default SecuredBusinessLoan;

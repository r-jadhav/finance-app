import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';
import ION from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import colors from '../../constant/colors';
import EvilIcons from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../CustomInput';
import i18n from '../../i18n';
import FormModal from '../../components/FormsModal';

const signUpValidationSchema = yup.object().shape({
  prof_loan_name: yup.string().required(i18n.t('Full_name_is_required')),
  prof_loan_phone: yup.string().required(i18n.t('Phone_number_is_required')),
  prof_loan_email: yup.string().required(i18n.t('Email_is_required')),
  prof_loan_profession: yup.string().required(i18n.t('Profession is require')),
  prof_loan_address: yup.string().required(i18n.t('Address_is_required')),
});
const ProfessionalLoan = ({navigation}) => {
  const [modalLogin, setModalLogin] = React.useState(false);
  const [loader, setLaoder] = useState(false);
  const createPost = values => {
    setLaoder(true);
    console.log(values);
    axios
      .post('http://finedict.com:3000/LoanEnquiryService', {
        prof_loan_name: values.prof_loan_name,
        prof_loan_email: values.prof_loan_email,
        prof_loan_phone: values.prof_loan_phone,
        prof_loan_profession: values.prof_loan_profession,
        prof_loan_address: values.prof_loan_address,
        created_date_time: new Date(),
        type: 'Professionalloan'
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
            {i18n.t('Professional_Loan')}
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
                prof_loan_name: '',
                prof_loan_email: '',
                prof_loan_phone: '',
                prof_loan_profession: '',
                prof_loan_address: '',
                type: 'Professionalloan'
              }}
              onSubmit={values => createPost(values)}>
              {({handleSubmit, isValid, values}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="prof_loan_name"
                    placeholder={i18n.t('Name')}
                  />

                  <Field
                    component={CustomInput}
                    name="prof_loan_phone"
                    placeholder={i18n.t('Contact_Number')}
                    keyboardType="numeric"
                  />

                  <Field
                    component={CustomInput}
                    name="prof_loan_email"
                    placeholder={i18n.t('Email')}
                  />

                  <Field
                    component={CustomInput}
                    name="prof_loan_profession"
                    placeholder={i18n.t('Profession')}
                  />

                  <Field
                    component={CustomInput}
                    name="prof_loan_address"
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

export default ProfessionalLoan;
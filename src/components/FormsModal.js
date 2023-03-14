import React,{useState,useContext}  from "react";
import { StyleSheet, View, Modal, Text, TouchableOpacity, Alert, ActivityIndicator, Image, ScrollView } from 'react-native'
import ANT from 'react-native-vector-icons/AntDesign'
import colors from "../constant/colors";
import i18n from "../i18n";

const FormModal = ({navigation,modalLogin,setModalLogin}) => {

  const handleModal = () => {setModalLogin(false)}

    return (
  
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalLogin}
            onRequestClose={() => {
              setModalLogin(!modalLogin);
            }}
          >

        <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.listlisting}>Select Loan Type</Text>
                <ANT color="#000" onPress={() =>{ handleModal()}} name='close' size={25}></ANT>
              </View>
             
              <ScrollView showsVerticalScrollIndicator={true}>

              <View>
              <TouchableOpacity onPress={()=>{
                handleModal()
                navigation.navigate('HomeLoan')}}
                style={styles.listItem}>
                <Text style={styles.listText}>{i18n.t('Home_Loan')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleModal() 
              navigation.navigate('PersonalLoan')}} style={styles.listItem}>
                <Text style={styles.listText}>{i18n.t('Personal_Loan')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleModal() 
              navigation.navigate('ProfessionalLoan')}} style={styles.listItem}>
                <Text style={styles.listText}>{i18n.t('Professional_Loan')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleModal() 
              navigation.navigate('SecuredBusinessLoan')}} style={styles.listItem}>
                <Text style={styles.listText}>{i18n.t('Secured_Business_Loan')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleModal() 
              navigation.navigate('SecuredOverdraftLimit')}} style={styles.listItem}>
                <Text style={styles.listText}>{i18n.t('Secured_Overdraft_Limit')}</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>{handleModal() 
              navigation.navigate('UnsecuredBusinessLoan')}} style={styles.listItem}>
                <Text style={styles.listText}>{i18n.t('Unsecured_Business_Loan')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{handleModal() 
              navigation.navigate('UnsecuredOverdraftLimit')}} style={styles.listItem}>
                <Text style={styles.listText}>{i18n.t('Unsecured_Overdraft_Limit')}</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={()=>{handleModal() 
              navigation.navigate('CarLoan')}} style={styles.listItem}>
                <Text style={styles.listText}>{i18n.t('Car_Loan')}</Text>
            </TouchableOpacity> */}
            </View>
              
              </ScrollView>
            </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor:'#00000080',
  },
modalView: {
    position:'absolute',
    bottom:0,
    backgroundColor: 'white',
    width:'100%',
    height:'70%',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  Heading:{
    fontWeight:'bold',
    fontSize:30,
    color:'#000',
  },
  listTextDesp:{
    fontSize: 12,
    color: colors.text,
    lineHeight:22
},
listlisting:{
  fontSize: 20,
  color:colors.text,
  fontWeight:'700',
  marginBottom:15,
  color:colors.primary
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
  },
cardImage:{
    width:120,
    height:120,
    borderRadius:10,
    marginRight:10,
    marginBottom:15,
    resizeMode:'contain',
    alignSelf:'center'
},
})

export default FormModal;
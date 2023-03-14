import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,SafeAreaView, Alert  } from 'react-native'
import ION from 'react-native-vector-icons/Ionicons'
import colors from '../constant/colors'
import EvilIcons from 'react-native-vector-icons/AntDesign'
import i18n from '../i18n'
import FormModal from './FormsModal'

function FormHeader({navigation}) {
  const [modalLogin, setModalLogin] = React.useState(false);

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
    <FormModal modalLogin={modalLogin} setModalLogin={setModalLogin} navigation={navigation}/>
  </SafeAreaView>
</>
  )
}

export default FormHeader

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
  
 })
 
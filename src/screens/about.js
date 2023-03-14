import React from 'react'
import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity,Platform ,Alert } from 'react-native'
import colors from '../constant/colors'
import EvilIcons from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../i18n'


const Menu = ({navigation}) => {

  return (
    <View style={styles.container}>
      <ScrollView>
      <LinearGradient
              colors={['#6a32a1','#ce49bfad'] }
              start={{x: 0.3, y: 0.25}} end={{x: 0.5, y: 1.0}}
               style={[styles.header,{backgroundColor:colors.primary,borderBottomRightRadius: 35,
                borderBottomLeftRadius: 35,}]}>
                
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <EvilIcons color="#fff" size={30} name='arrowleft'></EvilIcons>
            </TouchableOpacity> 
          <Text style={{textAlign:'center',fontSize:25,color:'#fff',
          fontFamily:'Poppins-SemiBold'}}>{i18n.t('About_Us')}</Text>
          <Text></Text>
      </LinearGradient>
        <View style={styles.contactForm}>
          <Text style={{marginTop:20,color:'#2d2e2e'}}>{i18n.t('about')}</Text>

      <View style={{marginVertical:20}}>
        <Text style={{fontSize:16,color:'#2d2e2e',marginBottom:5}}>{i18n.t('Process_heading')}</Text>
        <Text style={{color:'#2d2e2e'}}>{i18n.t('Process_des')}
        </Text>
      </View>

      <View style={{}}>
          <Text style={{fontSize:16,color:'#2d2e2e',marginBottom:5}}>{i18n.t('Security_heading')}</Text>

          <Text style={{color:'#2d2e2e'}}> {i18n.t('Security_des')} </Text>
      </View>

        </View>

      </ScrollView>
     
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
      },
      header:{
        flex:2,
        width:'100%',
        borderBottomEndRadius:35,
        borderBottomLeftRadius:35,
        padding:'8%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      contactForm:{
          paddingHorizontal:15,
          marginBottom:20,
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
      }
    
})
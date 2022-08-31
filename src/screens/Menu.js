import React from 'react'
import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity  } from 'react-native'
import FTextInput from '../components/FTextInput'
import  Button  from '../components/Button';
import colors from '../constant/colors'
import EvilIcons from 'react-native-vector-icons/AntDesign'
import MI from 'react-native-vector-icons/MaterialIcons'
const Menu = ({navigation}) => {
    const iconSize = 30
    const colorIcon = colors.primary
  return (
    <View style={styles.container}>
      <ScrollView>
         <View style={[styles.header,{backgroundColor:colors.primary}]}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <EvilIcons color="#fff" size={30} name='arrowleft'></EvilIcons>
            </TouchableOpacity>
          <Text style={{textAlign:'center',fontSize:25,color:'#fff',
          fontFamily:'Poppins-SemiBold'}}>Menu</Text>
          <Text></Text>
        </View>
        <View style={styles.contactForm}>
           <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
             <Image style={{width:80,height:80}} source={require('../assets/img/user.png')}></Image>
            <View style={{marginLeft:20}}>
                <Text style={{fontFamily:'Poppins-Medium',color:'#000',fontSize:22}}>Rahul Kapadia</Text>
                <Text style={{fontFamily:'Poppins-Regular',color:colors.primary,fontSize:18}}>+91 8766783939</Text>
            </View>
           </View>
            <TouchableOpacity style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='star'></MI>
                <Text style={styles.listText}>Rate Our App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='share'></MI>
                <Text style={styles.listText}>Share Our App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='info'></MI>
                <Text style={styles.listText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='security'></MI>
                <Text style={styles.listText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='list-alt'></MI>
                <Text style={styles.listText}>Terms & Condition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <MI size={iconSize} color={colorIcon} name='logout'></MI>
                <Text style={styles.listText}>Log out</Text>
            </TouchableOpacity>
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
        borderBottomEndRadius:15,
        borderBottomLeftRadius:15,
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
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constant/colors'

const Button = ({title,onPress,style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{
      width:'100%',height:60,borderRadius:8,
      flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center',
      backgroundColor:colors.primary
      },style]}>
      <Text style={{color:'#fff',fontSize:20,fontFamily:'Poppins-Medium'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})
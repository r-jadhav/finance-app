import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{
      width:'100%',height:40,borderRadius:8,
      flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center',
      backgroundColor:'#554994'
      }}>
      <Text style={{color:'#fff',fontSize:16}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})
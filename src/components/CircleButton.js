import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
// import Arrow from '../assets/img/rightarrow.svg'

const CircleButton = ({onPress,stylesB}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{width:60,height:60,borderRadius:70,
      backgroundColor:'#554994',flexDirection:'row',alignItems:'center',justifyContent:'center',
      alignSelf:'flex-end',marginTop:20},stylesB]}>

            <Image
                style={styles.arrow}
                source={require('../assets/img/arrow.png')}
            />
    </TouchableOpacity>
  )
}

export default CircleButton

const styles = StyleSheet.create({
    arrow:{
        width:30,
        height:30
    }
})

// 389AB9
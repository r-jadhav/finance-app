import { StyleSheet, Text, View,TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React from 'react'
// import Arrow from '../assets/img/rightarrow.svg'
import ANT from 'react-native-vector-icons/AntDesign'
import colors from '../constant/colors'
const CircleButton = ({onPress,stylesB,title,loading}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[{minWidth:180,height:50,borderRadius:5,
      backgroundColor:'#fff',flexDirection:'row',alignItems:'center',justifyContent:'center',
      alignSelf:'flex-start',marginTop:20,elevation:4},stylesB]}>
        {loading == true ? (<ActivityIndicator size="small" color={colors.primary}></ActivityIndicator>) : (<Text style={{fontSize:18,fontFamily:'Poppins-Medium',color:colors.primary}}>{title}</Text>)}
        
        
          {/* <ANT size={25} name="arrowright" color={colors.primary}></ANT> */}
          
            {/* <Image
                style={styles.arrow}
                source={require('../assets/img/arrow.png')}
            /> */}
    </View>
    </TouchableOpacity>
  )
}

export default CircleButton

const styles = StyleSheet.create({
    // arrow:{
    //     width:30,
    //     height:30
    // }
})

// 389AB9
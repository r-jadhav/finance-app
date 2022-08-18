import React from 'react'
import { StyleSheet, Text, View, TextInput,ScrollView  } from 'react-native'
import FTextInput from '../components/FTextInput'
import { Button } from 'react-native-paper';


const Contact = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
         <View style={styles.header}>
          <Text style={{textAlign:'center',fontSize:20,fontWeight:'700',color:'#222'}}>Contact Details</Text>
        </View>
        <View style={styles.contactForm}>
            <FTextInput placeholder="Email" ></FTextInput>
            <FTextInput style={{}} placeholder="Name" ></FTextInput>
            <FTextInput style={{}} placeholder="Contact Number" ></FTextInput>
            <FTextInput style={{}} placeholder="Monthly Salary" ></FTextInput>
            <FTextInput style={{}} placeholder="Require Load Amount" ></FTextInput>
            <Button mode="contained" color="#222" onPress={() => console.log('Pressed')} style={{marginTop:40}}>
               Submit
            </Button>
        </View>

      </ScrollView>
     
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5'
  },
  header:{
    flex:2,
    backgroundColor:'#54BAB9',
    width:'100%',
    borderBottomEndRadius:15,
    borderBottomLeftRadius:15,
    padding:'8%',
  },
  contactForm:{
      paddingHorizontal:30
  }

})


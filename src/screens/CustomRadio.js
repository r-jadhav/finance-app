import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RadioButton,Text, TextInput } from 'react-native-paper';
import CustomInput from './CustomInput';

const CustomRadio = (props) => {
  
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  const [option, setOption] = React.useState('');


    return (
        <View>
            <RadioButton.Group 
            onValueChange={newValue => setOption(newValue)} 
            value={option}
            style={styles.radio}
            >
              <Text style={{marginTop:30}}>{props.title}</Text>
              <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
              
                  <RadioButton value={props.value1}  name={props.name} onSelect={(value) => setOption(value) } />
                  <Text>{props.first_name}</Text>

                  <RadioButton value={props.value2} name={props.name} onSelect={(value) => setOption(value) }/>
                  <Text>{props.second_name}</Text>

                  { props.third_name ? ( <>
                  <RadioButton value="third" onSelect={(value) => setOption(value)} />
                  <Text> {props.third_name}</Text>
                  </> ) : ('') }

                
              </View>
              
              { option && option === 'first' ? 
     
                (  <TextInput onChangeText={(text)=> onChange(name)(text) } 
                  value={value}
                  name={props.salaryName} placeholder="Enter Salary" keyboardType="numeric" style={styles.textInput}/> ) : 
                  option && option === 'second' ? 
                  (
                  <TextInput onChangeText={(text)=> onChange(name)(text)} 
                  value={value}
                  name={props.businessName} placeholder="Enter Business Name" style={styles.textInput}/>) : ( "" )

                  }
            </RadioButton.Group>
      </View>
    );
  };

  export default CustomRadio

  const styles = StyleSheet.create({
    textInput: {
      backgroundColor:'transparent',
      marginTop:10
  
    },
    errorText: {
      fontSize: 10,
      color: 'red',
    },
    errorInput: {
      borderColor: 'red',
    }
  })
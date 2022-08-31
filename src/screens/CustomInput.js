import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        style={[
          styles.textInput,
          props.multiline && { height: props.numberOfLines * 40 },
          hasError && styles.errorInput
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    // height: 40,
    // width: '100%',
    // margin: 10,
    // borderColor: 'gray',
    // borderRadius: 10,
    // textAlignVertical: 'top',
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

export default CustomInput
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const privacy = () => {
  return (
    <View style={{flex:1}}>
      <WebView source={{uri:'https://finedict.com/#/privacy-policy'}}></WebView>
    </View>
  )
}

export default privacy

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import MainNavigator from './src/navigation/MainNavigator'
const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <MainNavigator></MainNavigator>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})
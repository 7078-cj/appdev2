import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function TextInputComponent({type, icon}) {
  return (
    <View >
      {icon}
      <TextInput
            placeholder={`Enter your ${type == 'confirm_password' ? 'confirm password': type}`}
            keyboardType="email-address"
            secureTextEntry={type == 'password' ||type == 'confirm_password'}
            
          />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
  

  },

  textInput: {
  
  },
});
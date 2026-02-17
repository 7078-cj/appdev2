import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ButtonComponent({text}) {
  return (
    <TouchableOpacity >
      <Text >{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
       
        
    }
})
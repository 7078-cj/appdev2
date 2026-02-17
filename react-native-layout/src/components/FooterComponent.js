import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function FooterComponent({ path, setPage }) {
  return (
    <View >
      <ButtonComponent text={path === 'signup' ? 'Login' : 'Signup'} />

      <View >
        <Text>
          {path === 'signup'
            ? "Already have an account?"
            : "Don't have an account?"}
        </Text>

        <TouchableOpacity
          onPress={
            () => setPage(path)
          }
          
        >
          <Text>
            {path === 'signup' ? 'Login' : 'Signup'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
       
    },
    bottomContent:{
      
    },
    
})
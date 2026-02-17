import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function FooterComponent({ path, setPage }) {
  return (
    <View style={styles.container}>
      <ButtonComponent text={path === 'signup' ? 'Login' : 'Signup'} />

      <View style={styles.bottomContent}>
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
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-evenly'
    },
    bottomContent:{
        flexDirection: 'row',
        gap: 5
    },
    
})
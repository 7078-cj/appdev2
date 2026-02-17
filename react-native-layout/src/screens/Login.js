import { Button, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextInputComponent from '../components/TextInputComponent'
import { Ionicons } from '@expo/vector-icons';
import ButtonComponent from '../components/ButtonComponent';
import FooterComponent from '../components/FooterComponent';
import login from '../../assets/login.png'

export default function Login({setPage, styles}) {
  return (
    <View >
      {/* Header */}
      <View >
        <Image source={login} />
        <Text >Log In</Text>
      </View>

      {/* Inputs */}
      <View >

        <TextInputComponent type={'email'} icon={<Ionicons name="mail-outline" size={22} color="gray" />}/>

        <TextInputComponent type={'password'} icon={<Ionicons name="lock-closed-outline" size={22} color="gray" />}/>

      </View>

      {/* footer */}
      <FooterComponent path={'signup'} setPage={setPage}/>
    </View>
  )
}


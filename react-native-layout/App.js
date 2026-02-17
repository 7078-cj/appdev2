import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';



export default function App() {
  const [page, setPage] = useState('login')
  return (
    <>
      {
        page == 'login' ? <Login setPage={setPage} styles={styles}/> : <Signup setPage={setPage} styles={styles}/> 
      }
    </>
  );
}



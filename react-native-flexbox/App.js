import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './components/Flex';
import FlexDirectionBasics from './components/FlexDirectionBasics';

export default function App() {
  return (
    <>
      {/* <Flex/> */}
      <FlexDirectionBasics/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

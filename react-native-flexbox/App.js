import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './components/Flex';
import FlexDirectionBasics from './components/FlexDirectionBasics';
import DirectionLayout from './components/DirectionLayout';
import JustifyContentBasics from './components/JustifyContentBasics';
import AlignItemsLayout from './components/AlignItemsLayout';

export default function App() {
  return (
    <>
      {/* <Flex/> */}
      {/* <FlexDirectionBasics/> */}
      {/* <DirectionLayout/> */}
      {/* <JustifyContentBasics/> */}
      <AlignItemsLayout/>
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

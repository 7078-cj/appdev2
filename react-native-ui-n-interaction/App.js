import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LotsOfStyles from './components/LotsOfStyles';
import FixedDimensionsBasics from './components/FixedDimensionsBasics';
import FlexDimensionsBasics from './components/FlexDimensionsBasics';

export default function App() {
  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   <LotsOfStyles/>
    //   <FixedDimensionsBasics/>
    //   <FlexDimensionsBasics/>
    // </ScrollView>
    <>
      <FlexDimensionsBasics/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
});

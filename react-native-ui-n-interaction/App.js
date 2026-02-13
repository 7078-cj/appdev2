import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LotsOfStyles from './components/LotsOfStyles';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LotsOfStyles/>
    </ScrollView>
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

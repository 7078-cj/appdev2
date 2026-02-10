import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileDemo() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Course & Section: BSIS3A</Text>
      <Text style={styles.text}>Name: Ceejay Santos</Text>
      <Text style={styles.text}>Age: 20</Text>
      <Text style={styles.text}>Favorite Hobby: Chess</Text>
      <Text style={styles.text}>
        3 Pet peeves in your class / classmate: [Mayabang, hypocrite, ayaw malamangan]
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
  },
})

import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box1: {
    flex: 3,
    backgroundColor: 'red',
  },
  box2: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

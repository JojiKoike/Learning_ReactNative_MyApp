import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return <View style={styles.box1}></View>;
}

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: 'red',
  },
});

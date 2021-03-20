import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.common}>common</Text>
      <Text style={styles.strong}>strong</Text>
      <Text style={[styles.common, styles.strong]}>common & strong</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  common: {
    fontSize: 14,
    textAlign: 'center',
  },
  strong: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

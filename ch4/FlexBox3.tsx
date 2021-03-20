import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.box}></View>
      <View style={style.box}></View>
      <View style={style.box}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  box: {
    height: 100,
    borderWidth: 1,
    backgroundColor: 'blue',
  },
});

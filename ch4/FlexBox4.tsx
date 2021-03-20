import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={style.container}>
      <View style={style.box}></View>
      <View style={style.box}></View>
      <View style={style.box}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    backgroundColor: 'blue',
  },
});
export default App;

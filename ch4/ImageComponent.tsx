import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 210,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./gopher.png')} />
    </View>
  );
};

/*
const AppNative = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'logo' }} style={[styles.image]} />
    </View>
  );
};
*/

export default App;

import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

const image = { uri: 'https://reactjs.org/logo-og.png' };

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.label}>React Native</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 210,
  },
  label: {
    color: 'white',
    fontSize: 64,
  },
});

export default App;

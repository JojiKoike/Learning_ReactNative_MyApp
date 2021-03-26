import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressView } from '@react-native-community/progress-view';

const App = () => {
  return (
    <View style={styles.container}>
      <ProgressView style={styles.progressBar} progress={0.4} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: 256,
  },
});

export default App;
